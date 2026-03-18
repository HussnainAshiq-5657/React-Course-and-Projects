import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ScrollHero() {
  const ref = useRef();

  const { scrollYProgress } = useScroll();

  const { scrollYProgress: sectionProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const progressScaleX = scrollYProgress;

  const scale = useTransform(sectionProgress, [0, 1], [0.8, 1.2]);
  const opacity = useTransform(sectionProgress, [0, 0.5, 1], [0, 1, 0]);
  const y = useTransform(sectionProgress, [0, 1], [100, -100]);

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="bg-black text-white">
      <motion.div
        style={{ scaleX: progressScaleX }}
        className="fixed top-0 left-0 h-1 bg-red-500 w-full origin-left z-50"
      />

      <section className="h-screen flex items-center justify-center">
        <motion.h1 style={{ y: parallaxY }} className="text-5xl font-bold">
          Parallax Heading 🚀
        </motion.h1>
      </section>

      <section ref={ref} className="h-screen flex items-center justify-center">
        <motion.div
          style={{ scale, opacity, y }}
          className="bg-blue-500 p-10 rounded-xl text-center"
        >
          Scroll Animation 🔥
        </motion.div>
      </section>

      {/* 🔥 EXTRA CONTENT */}
      <section className="h-screen flex items-center justify-center">
        <h2 className="text-3xl">Keep Scrolling 👇</h2>
      </section>
    </div>
  );
}
