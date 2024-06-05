import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';

import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Casecobra',
  description: 'A Modern E-Commerce-Store for Custom Phone Cases',
};

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
        className={inter.className}
        style={{ overflowX: 'hidden', overflowY: 'auto' }}
      >
        <Navbar />
        <main className='flex flex-col min-h-[calc(100vh-3.5rem-1px)]'>
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
