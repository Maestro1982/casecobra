import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

import { Toaster } from '@/components/ui/toaster';

import { constructMetadata } from '@/lib/utils';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body
        className={recursive.className}
        style={{ overflowX: 'hidden', overflowY: 'auto' }}
      >
        <Navbar />
        <main className='flex flex-col grainy-light min-h-[calc(100vh-3.5rem-1px)]'>
          <div className='flex flex-col flex-1 h-full'>
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
