'use client';

import { useState, useTransition } from 'react';
import Dropzone, { FileRejection } from 'react-dropzone';
import { Image, Loader2, MousePointerSquareDashed } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useUploadThing } from '@/lib/uploadthing';

import { Progress } from '@/components/ui/progress';

const Page = () => {
  const [isDraggedOver, setIsDraggedOver] = useState<boolean>(false);
  const [uploadProgress, setUploadProgress] = useState<number>(0);

  const {} = useUploadThing('imageUploader', {
    onClientUploadComplete: ([data]) => {},
  });

  const onDropRejected = () => {};
  const onDropAccepted = () => {
    console.log('onDropAccepted');
  };

  const isUploading = false;
  const [isPending, startTransition] = useTransition();

  return (
    <div
      className={cn(
        'relative h-full w-full flex-1 my-16 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex flex-col items-center justify-center',
        {
          'ring-blue-900/25 bg-blue-900/10': isDraggedOver,
        }
      )}
    >
      <div className='relative flex flex-col flex-1 items-center justify-center w-full'>
        <Dropzone
          onDropRejected={onDropRejected}
          onDropAccepted={onDropAccepted}
          accept={{
            'image/png': ['.png'],
            'image/jpeg': ['.jpeg'],
            'image/jpg': ['.jpg'],
          }}
          onDragEnter={() => setIsDraggedOver(true)}
          onDragLeave={() => setIsDraggedOver(false)}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              className='h-full w-full flex-1 flex flex-col items-center justify-center'
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              {isDraggedOver ? (
                <MousePointerSquareDashed className='h-6 w-6 text-zinc-500 mb-2' />
              ) : isUploading || isPending ? (
                <Loader2 className='animate-spin h-6 w-6 text-zinc-500 mb-2' />
              ) : (
                <Image className='h-6 w-6 text-zinc-500 mb-2 cursor-pointer' />
              )}
              <div className='flex flex-col justify-center mb-2 text-sm text-zinc-700'>
                {isUploading ? (
                  <div className='flex flex-col items-center'>
                    <p>Uploading...</p>
                    <Progress
                      value={uploadProgress}
                      className='mt-2 w-40 h-2 bg-gray-200'
                    />
                  </div>
                ) : isPending ? (
                  <div className='flex flex-col items-center'>
                    <p>Redirecting, please wait...</p>
                  </div>
                ) : isDraggedOver ? (
                  <p>
                    <span className='font-semibold'>Drop file</span>
                    to upload
                  </p>
                ) : (
                  <p>
                    <span className='font-semibold'>Click to upload </span>
                    or drag and drop
                  </p>
                )}
              </div>

              {isPending ? null : (
                <p className='text-xs text-zinc-500'>PNG, JPEG, JPG</p>
              )}
            </div>
          )}
        </Dropzone>
      </div>
    </div>
  );
};
export default Page;