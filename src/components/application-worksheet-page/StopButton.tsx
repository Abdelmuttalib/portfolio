import React, { useState } from "react";

import { Button } from "@/components/buttons";

const StopButton = () => {
  const [size, setSize] = useState<number>(6);
  const [randomColor, setRandomColor] = useState<string>("#1c1ec1");

  const generateRandomColor = () => {
    const maxVal = 0xffffff; // 16777215
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    const randomNumberToString: string = randomNumber.toString(16);
    const randColor = randomNumberToString.padStart(6);
    return `#${randColor.toUpperCase()}`;
  };

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setSize((prevValue) => prevValue * 2);
          setRandomColor(generateRandomColor);
        }}
        style={{
          width: `${size}rem`,
          height: `${size}rem`,
          backgroundColor: randomColor,
        }}
        className="rounded-md bg-primary-600 font-medium"
      >
        StopButton
      </button>

      <Button
        type="button"
        onClick={() => {
          setSize(6);
        }}
        className="absolute bottom-64 z-50 lg:bottom-auto lg:right-10"
      >
        reset button state
      </Button>
    </>
  );
};

export default StopButton;
