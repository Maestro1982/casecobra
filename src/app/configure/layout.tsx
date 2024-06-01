import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const ConfigureLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MaxWidthWrapper className='flex flex-col flex-1'>
      {children}
    </MaxWidthWrapper>
  );
};
export default ConfigureLayout;
