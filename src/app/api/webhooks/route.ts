import { headers } from 'next/headers';
import Stripe from 'stripe';
import { NextResponse } from 'next/server';

import { stripe } from '@/lib/stripe';
import { db } from '@/db';

interface ExtendedSession extends Stripe.Checkout.Session {
  shipping?: {
    address: Stripe.Address;
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = headers().get('stripe-signature');

    if (!signature) {
      return new Response('Invalid signature', { status: 400 });
    }

    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as ExtendedSession;
      console.log('Checkout session completed:', session);

      if (!session.customer_details?.email) {
        throw new Error('Missing user email');
      }

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error('Invalid request metadata');
      }

      const billingAddress = session.customer_details!.address;
      const shippingAddress = session.shipping!.address;

      console.log('Billing address:', billingAddress);
      console.log('Shipping address:', shippingAddress);

      const updatedOrder = await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: shippingAddress!.city!,
              country: shippingAddress!.country!,
              postalCode: shippingAddress!.postal_code!,
              street: shippingAddress!.line1!,
              state: shippingAddress!.state,
            },
          },

          billingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: billingAddress!.city!,
              country: billingAddress!.country!,
              postalCode: billingAddress!.postal_code!,
              street: billingAddress!.line1!,
              state: billingAddress!.state,
            },
          },
        },
      });

      console.log('Updated order:', updatedOrder);
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error('Error processing webhook:', err);

    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 }
    );
  }
}
