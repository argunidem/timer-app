import { motion } from 'framer-motion';

const Alert = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        y: 100,
        scale: 1.1,
        transition: { delay: 0.8, duration: 0.8 },
      }}
      key='alert'
      className='alert alert-warning w-40 bounce'
    >
      <span className='mx-auto text-xs'>Time's up!</span>
    </motion.div>
  );
};
export default Alert;
