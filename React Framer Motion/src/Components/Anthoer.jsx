import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedPage() {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <motion.section
        className="h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-blue-200"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Welcome to My App 🚀</h1>
          <p className="text-lg text-gray-700">
            Fully animated page using Framer Motion — no real images required!
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="md:w-1/2 w-64 h-64 mt-6 md:mt-0 rounded-xl bg-white flex items-center justify-center text-6xl shadow-lg"
        >
          🎨
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="py-20 px-8 grid md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {[1, 2, 3].map((feature, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-xl shadow-lg p-6 text-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 2 }}
          >
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center text-5xl bg-blue-100 rounded-full">
              {['⚡', '💡', '🎯'][i]}
            </div>
            <h2 className="font-bold text-xl mb-2">Feature {i + 1}</h2>
            <p className="text-gray-600">This feature is amazing and fully animated!</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="bg-gray-800 text-white py-10 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        &copy; 2026 My Animated App
      </motion.footer>
    </div>
  );
}

export default AnimatedPage;
