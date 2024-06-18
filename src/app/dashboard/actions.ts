'use server';

import { OrderStatus } from '@prisma/client';

import { db } from '@/db';

type ChangeOrderStatus = {
  id: string;
  newStatus: OrderStatus;
};

export const changeOrderStatus = async ({
  id,
  newStatus,
}: ChangeOrderStatus) => {
  await db.order.update({
    where: {
      id: id,
    },
    data: {
      status: newStatus,
    },
  });
};
