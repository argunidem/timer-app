import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { FiTriangle } from 'react-icons/fi';

import { TimerProps } from './UnitContainer';
import { calculateTime } from '../calculate';

type ArrowProps = {
  values: TimerProps['values'];
  rotated: boolean;
  started: TimerProps['started'];
  unit: string;
  setValues: TimerProps['setValues'];
};

const Arrow: React.FC<ArrowProps> = ({
  rotated,
  started,
  unit,
  values,
  setValues,
}) => {
  const setTimer = (): void => {
    let newTotal = values.total;
    switch (unit) {
      case 'hours':
        const isLastHour = values.hours === 1 ? true : false;
        newTotal =
          rotated && isLastHour
            ? 3599
            : rotated
            ? newTotal - 3600
            : newTotal + 3600;
        break;
      case 'min':
        const isLastMinute = values.min === 1 ? true : false;
        newTotal =
          rotated && isLastMinute && values.hours === 0
            ? 60
            : rotated
            ? newTotal - 60
            : newTotal + 60;
        break;
      case 'sec':
        newTotal = rotated ? newTotal - 1 : newTotal + 1;
        break;
      default:
        break;
    }
    setValues({ ...values, ...calculateTime(newTotal) });
  };

  return (
    <AnimatePresence>
      {!started ? (
        <motion.button
          onClick={setTimer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FiTriangle className={`arrow ${rotated ? 'rotated' : ''}`} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default Arrow;
