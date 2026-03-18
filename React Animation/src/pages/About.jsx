import { motion } from 'motion/react';
import { useScroll } from 'motion/react';
function About() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      style={{ padding: '50px', scaleX: scrollYProgress }}
    >
      <h1>📄 About Page</h1>
    </motion.div>
  );
}

export default About;

