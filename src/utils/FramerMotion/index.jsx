import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FramerMotion = ({children}) => {
  const { ref, inView } = useInView({
    // triggerOnce: true,
     // Animation happens only once
    threshold: 0.1, // Trigger when 10% of the element is visible
  });

  const variants = {
    hidden: { opacity: 0, y: 100 },  // Element starts hidden and below
    visible: { opacity: 1, y: 0 },   // When in view, it moves up and becomes visible
  };

  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.6 }}
        className="content-box"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FramerMotion;
