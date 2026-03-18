import { motion } from "motion/react";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
      style={{ padding: "50px" }}
    >
      <h1>🏠 Home Page</h1>
      <svg width="200" height="200" viewBox="0 0 100 100">
      <motion.path
        d="M10 80 Q 50 10 50 80"
        stroke="blue"
        strokeWidth="4"
        fill="transparent"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </svg>
    </motion.div>
    
  );
}

export default Home;