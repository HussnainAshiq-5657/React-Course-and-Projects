import { easeIn, easeInOut, motion } from 'framer-motion';

function CenteredCard() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{ opacity: 0.8, y: -10, duration: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">Welcome to My App</h1>
        <motion.img
          whileHover={{ rotate: 360, duration: 1, ease: 'easeOut' }}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLat8bZvhXD3ChSXyzGsFVh6qgplm1KhYPKA&s"
          alt="My Pic"
          className="w-40 h-40 object-cover rounded-full"
        />
        <p className="text-gray-600 text-center">
          This is a nice card with text and an image centered perfectly.
        </p>
      </motion.div>
    </div>
  );
}

export default CenteredCard;
