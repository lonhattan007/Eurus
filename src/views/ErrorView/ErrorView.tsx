import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorView = () => {
  const error: any = useRouteError();

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log(error);
    }
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center p-0 m-auto'>
      <h1 className='m-3 font-bold text-[3.2em]'>Oops!</h1>
      <h3 className='m-3'>Sorry, an unexpected error has occurred.</h3>
      <p className='italic font-bold'>
        {`${error.status} - ${error.statusText || error.message}`}
      </p>
    </div>
  );
};

export default ErrorView;
