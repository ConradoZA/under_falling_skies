import React from 'react';
import { CircleLoader } from 'react-spinners';

const Spinner: React.FC = () => {
  return (
    <div className='absolute z-50 h-screen w-screen bg-slate-950/50'>
      <CircleLoader
        data-testid='loader'
        aria-label='Loading Spinner'
        className='top-[44vh] mx-auto'
        color='#953b07'
        size={'12vmin'}
        speedMultiplier={1.2}
      />
    </div>
  );
};

export default Spinner;
