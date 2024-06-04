import Link from 'next/link';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

import { FOOTER_ITEMS } from '@/constants';

const Footer = () => {
  return (
    <footer className='bg-white relative h-20'>
      <MaxWidthWrapper>
        <div className='border-t border-gray-200' />
        <div className='flex flex-col h-full justify-center items-center md:flex-row md:justify-between'>
          <div className='text-center md:text-left pb-2 md:pb-0'>
            <p className='text-sm text-muted-foreground'>
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-8'>
              {FOOTER_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href='#'
                  className='text-sm text-muted-foreground hover:text-gray-600'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;
