import { cn } from '@/lib/utils';

interface PhoneProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ className, imgSrc, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        'relative pointer-events-none z-50 overflow-hidden',
        className
      )}
      {...props}
    >
      <img
        src={
          dark
            ? '/phone-template-dark-edges.png'
            : '/phone-template-white-edges.png'
        }
        alt='Phone image'
        className='pointer-events-none z-50 select-none'
      />

      <div className='absolute -z-10 inset-0'>
        <img
          src={imgSrc}
          alt='Overlaying phone image'
          className='object-cover'
        />
      </div>
    </div>
  );
};
export default Phone;