import type { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { buttonVariants } from '@/components/ui/button';

import { cn } from '@/lib/utils';

type LoginModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const LoginModal = ({ isOpen, setIsOpen }: LoginModalProps) => {
  return (
    <Dialog onOpenChange={setIsOpen} open={isOpen}>
      <DialogContent className='absolute z-[999999]'>
        <DialogHeader>
          <div className='relative mx-auto h-24 w-24 mb-2'>
            <Image
              src='/snake-1.png'
              alt='Snake image'
              className='object-contain'
              fill
            />
          </div>
          <DialogTitle className='text-3xl text-center font-bold tracking-tight text-gray-900'>
            Login to continue
          </DialogTitle>
          <DialogDescription className='text-base py-2 text-center'>
            <span className='font-medium text-green-600'>
              Your configuration was saved!
            </span>{' '}
            Please login or create an account to complete your purchase.
          </DialogDescription>
        </DialogHeader>
        <div className='grid grid-cols-2 gap-6 divide-x divide-gray-200'>
          <LoginLink className={cn(buttonVariants({ variant: 'outline' }))}>
            Login
          </LoginLink>
          <RegisterLink className={cn(buttonVariants({ variant: 'default' }))}>
            Sign Up
          </RegisterLink>
        </div>
      </DialogContent>
    </Dialog>
  );
};
export default LoginModal;
