import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import React from 'react';

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === 'string') {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = 'Unknown error';
  }

  return (
    <div id='error-page' className='flex h-screen flex-col items-center justify-center gap-8'>
      <h1 className='text-4xl font-bold'>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className='text-slate-400'>
        <i>{errorMessage}</i>
      </p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default ErrorPage;
