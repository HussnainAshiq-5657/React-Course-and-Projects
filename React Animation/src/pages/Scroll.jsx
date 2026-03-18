import {
  motion,
  AnimatePresence,
  useAnimation
} from "framer-motion";
import { useState } from "react";

export default function App() {
  const [selected, setSelected] = useState(null);
  const controls = useAnimation();

  const items = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" }
  ];

  // stagger container
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // card animation
  const card = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const handleButton = async () => {
    await controls.start({ scale: 1.2 });
    await controls.start({ scale: 1 });
  };

  return (
    <div className="p-10">

      {/* 🔥 Stagger List */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 gap-4"
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            variants={card}
            layout
            layoutId={`card-${item.id}`}
            whileHover={{ scale: 1.05 }}
            onClick={() => setSelected(item)}
            className="bg-blue-500 text-white p-5 rounded-xl cursor-pointer"
          >
            {item.title}
          </motion.div>
        ))}
      </motion.div>

      {/* 🔥 Modal (layoutId magic) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              layoutId={`card-${selected.id}`}
              layout
              className="bg-white p-10 rounded-xl text-black w-80"
              onClick={(e) => e.stopPropagation()}
            >
              <h2>{selected.title}</h2>
              <p className="mt-3">
                Yeh modal content hai 👀
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 🔥 useAnimation Button */}
      <motion.button
        animate={controls}
        onClick={handleButton}
        whileHover={{ scale: 1.1 }}
        className="mt-10 bg-black text-white px-5 py-2 rounded"
      >
        Animate Me
      </motion.button>

      {/* 🔥 whileInView */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 bg-green-500 p-10 text-white"
      >
        Scroll me 👀
      </motion.div>

    </div>
  );
}