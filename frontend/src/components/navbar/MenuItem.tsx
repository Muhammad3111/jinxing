/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ link }: any) => {
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="text-center"
    >
      <a className="text-2xl text-white uppercase hover:text-red-600 duration-150">
        {link}
      </a>
    </motion.li>
  );
};
