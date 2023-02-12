import React from 'react';

interface ButtonProps {
  setStarted: (value: boolean) => void;
  started: boolean;
}

const Button: React.FC<ButtonProps> = ({ started, setStarted }) => {
  return (
    <button
      onClick={() => setStarted(!started)}
      className='btn btn-warning btn-outline w-54 tracking-wider hover:font-bold'
    >
      {!started ? 'Start' : 'Stop'}
    </button>
  );
};

export default Button;
