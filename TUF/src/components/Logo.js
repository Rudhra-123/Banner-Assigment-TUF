import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.svg
      width="125"
      height="26"
      viewBox="0 0 135 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      // Define the animation properties
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 1, repeat: Infinity, repeatType: "loop" }}
    >
      <path d="M0 5.89409H15.3693L9.5331 36H21.8368L27.2126 5.89409H42.2511L43.4131 0H1.17165L0 5.89409Z" fill="#D41F30"></path>
      <path d="M47.2951 0L42.512 26.9438L49.9857 36H82.8746L89.1533 0H77.1198L71.8129 30.008H56.8626L54.4711 27.0927L59.1053 0H47.2951Z" fill="#D41F30"></path>
      <path d="M86.9282 36H98.7784L100.699 23.9651H130.691L131.882 17.9993H101.825L103.214 8.93625L106.724 5.82379H122.018L120.826 11.9812H132.81L134.929 0H102.156L91.6286 9.00241L86.9282 36Z" fill="#D41F30"></path>
    </motion.svg>
  );
};

export default Logo;
