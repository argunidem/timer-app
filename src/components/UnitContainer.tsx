import { Dispatch, SetStateAction } from 'react';
import TimeUnit from './TimeUnit';
import { AnimatePresence } from 'framer-motion';
import { Values, AnimationProps } from './Timer';

export type TimerProps = {
  values: Values;
  animationProps: AnimationProps;
  started: boolean;
  setValues: Dispatch<SetStateAction<Values>>;
};

const UnitContainer: React.FC<TimerProps> = ({
  values,
  animationProps,
  started,
  setValues,
}) => {
  const { total, hours } = values;

  return (
    <AnimatePresence>
      {hours !== 0 && (
        <TimeUnit
          key={1}
          values={values}
          unit='hours'
          animationProps={animationProps}
          started={started}
          setValues={setValues}
        />
      )}

      {total > 60 && (
        <TimeUnit
          key={2}
          values={values}
          unit='min'
          animationProps={animationProps}
          started={started}
          setValues={setValues}
        />
      )}

      <TimeUnit
        key={3}
        values={values}
        unit='sec'
        animationProps={animationProps}
        started={started}
        setValues={setValues}
      />
    </AnimatePresence>
  );
};

export default UnitContainer;
