import React, { useState } from 'react';

import { Button } from '@/components/buttons';

const Counter = () => {
  const [count, setCount] = useState(0);

  const countIsEven = count % 2 === 0;

  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-7xl'>{count}</h1>

      <h3>{countIsEven ? 'Even' : 'Odd'}</h3>

      <div className='flex gap-3'>
        <Button
          type='button'
          onClick={() => setCount((prevValue) => prevValue - 1)}
        >
          Decrement
        </Button>
        <Button
          type='button'
          onClick={() => setCount((prevValue) => prevValue + 1)}
        >
          Increment
        </Button>
      </div>
      <div>
        <Button type='button' variant='light' onClick={() => setCount(0)}>
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
