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
    <div className='container d-flex flex-column justify-content-center align-items-center'>
      <h1 className='m-3'>Oops!</h1>
      <h3 className='m-3'>Sorry, an unexpected error has occurred.</h3>
      <p className='font-italic'>
        {error.status} - {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorView;
