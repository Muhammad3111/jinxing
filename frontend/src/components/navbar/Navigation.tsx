import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem link={i} key={i} />
    ))}
  </motion.ul>
);

const itemIds = ["Menu", "Reservation", "About", "Contact", "Blog"];
