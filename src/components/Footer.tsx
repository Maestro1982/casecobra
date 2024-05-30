import Link from 'next/link';

import MaxWidthWrapper from '@/components/MaxWidthWrapper';

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
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'
              >
                Terms
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'
              >
                Privacy Policy
              </Link>
              <Link
                href='#'
                className='text-sm text-muted-foreground hover:text-gray-600'
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};
export default Footer;