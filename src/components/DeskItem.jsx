import { motion } from "framer-motion";

/**
 * DeskItem — makes a folder-cover decoration (photo, sticker, stamp)
 * something you can pick up and move. The wrapper covers the folder but
 * ignores the pointer; only the child itself is grabbable, so the CSS
 * transforms/animations on the child are left untouched.
 */
export default function DeskItem({ children, constraints }) {
  return (
    <motion.div
      className="deskItem"
      drag
      dragConstraints={constraints}
      dragElastic={0.12}
      dragMomentum={false}
      whileDrag={{ zIndex: 70, filter: "drop-shadow(0 26px 28px rgba(0,0,0,.28))" }}
    >
      {children}
    </motion.div>
  );
}
