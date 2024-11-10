'use client';

import { motion } from 'framer-motion';
import { AnimationContainerProps } from '@/types';

const AnimationContainer = ({
  children,
  customClassName,
  customDelay = 0.3,
  ...rest
}: AnimationContainerProps) => {
  return (
    <motion.div
      className={customClassName}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: customDelay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default AnimationContainer;
