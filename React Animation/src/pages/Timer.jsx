import { motion, useTime, useTransform } from 'framer-motion';

export default function Timer() {
  // ⏱ useTime gives a continuously increasing time value in seconds
  const time = useTime();

  // Rotate from 0° → 360° continuously
  const rotate = useTransform(time, (t) => t * 60); // 60° per second

  // Pulsating scale (oscillates 1 → 1.5 → 1)
  const scale = useTransform(time, (t) => 1 + 0.5 * Math.sin(t * 1)); // speed of pulsation

  // Color animation (changes from blue → red → blue)
  const color = useTransform(time, (t) => `hsl(${(t * 60) % 360}, 100%, 50%)`);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        style={{ rotate, scale, backgroundColor: color }}
        className="w-32 h-32 rounded-full"
      />
    </div>
  );
}
