import React, { useEffect, useState } from 'react';
import Button from './Button';
import UnitContainer from './UnitContainer';
import { motion, AnimatePresence } from 'framer-motion';
import { calculateTime } from '../calculate';
import Alert from './Alert';

export type Values = {
  total: number;
  hours: number;
  min: number;
  sec: number;
  complete: boolean;
};

export type AnimationProps = {
  initial: { opacity: number };
  animate: { opacity: number };
  exit: { opacity: number };
  className: string;
};

const Timer: React.FC = () => {
  const [values, setValues] = useState<Values>({
    total: 7060,
    hours: 4,
    min: 12,
    sec: 18,
    complete: false,
  });
  const [started, setStarted] = useState<boolean>(false);

  useEffect(() => {
    setValues({ ...values, ...calculateTime(values.total) });
  }, []);

  useEffect(() => {
    if (started) {
      const myInterval = setInterval(() => {
        setValues((prev) => {
          const calculation = calculateTime(values.total - 1);
          if (values.total === 0) {
            setStarted(false);
            return { ...prev, complete: true };
          } else {
            return { ...prev, ...calculation };
          }
        });
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [values, started]);

  const animationProps: AnimationProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    className: 'section',
  };

  return (
    <div className='flex flex-col items-center space-y-9'>
      <div className='h-[200px]'>
        <AnimatePresence>
          {!values.complete ? (
            <motion.div
              exit={{ opacity: 0, x: 500, transition: { duration: 0.6 } }}
              key='timer'
              className='grid grid-flow-col gap-5 text-center auto-cols-max text-warning'
            >
              <UnitContainer
                values={values}
                animationProps={animationProps}
                started={started}
                setValues={setValues}
              />
            </motion.div>
          ) : (
            <Alert />
          )}
        </AnimatePresence>
      </div>

      <Button started={started} setStarted={setStarted} />
    </div>
  );
};

export default Timer;
