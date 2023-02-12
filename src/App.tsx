import React from 'react';
import './App.css';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className='bg-slate-800 w-screen h-screen flex justify-center items-center'>
      <Timer />
    </div>
  );
};

export default App;
