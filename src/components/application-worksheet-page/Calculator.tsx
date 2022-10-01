import React, { useState } from 'react';

import { Button } from '@/components/buttons';

const Calculator = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);

  return (
    <div className='flex flex-col items-center gap-10'>
      <h1 className='text-7xl'>Sum: {firstInput + secondInput}</h1>

      <div className='flex gap-3'>
        <input
          type='number'
          inputMode='numeric'
          placeholder='0'
          className='w-32 rounded-md border-2 border-primary-100 px-4 py-2 outline-none'
          value={firstInput}
          onChange={(e) => setFirstInput(Number(e.target.value))}
        />
        <input
          type='number'
          inputMode='numeric'
          placeholder='0'
          className='w-32 rounded-md border-2 border-primary-100 px-4 py-2 outline-none'
          value={secondInput}
          onChange={(e) => setSecondInput(Number(e.target.value))}
        />
      </div>
      <div>
        <Button
          type='button'
          variant='light'
          onClick={() => {
            setFirstInput(0);
            setSecondInput(0);
          }}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
