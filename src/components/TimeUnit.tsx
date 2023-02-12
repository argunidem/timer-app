import { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { TimerProps } from './UnitContainer';
import Arrow from './Arrow';

type TimeUnitProps = {
  values: TimerProps['values'];
  unit: string;
  animationProps: TimerProps['animationProps'];
  started: TimerProps['started'];
  setValues: TimerProps['setValues'];
};

const TimeUnit: React.FC<TimeUnitProps> = ({
  values,
  unit,
  animationProps,
  started,
  setValues,
}) => {
  return (
    <motion.div key={unit} {...animationProps}>
      <Arrow
        values={values}
        rotated={false}
        started={started}
        unit={unit}
        setValues={setValues}
      />
      <span className='span'>
        <span
          style={{ '--value': (values as any)[unit] } as CSSProperties}
        ></span>
      </span>
      {unit}
      <Arrow
        values={values}
        rotated={true}
        started={started}
        unit={unit}
        setValues={setValues}
      />
    </motion.div>
  );
};
export default TimeUnit;
