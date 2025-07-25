import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = ({ title, subtitle, ctaText, ctaLink, imageUrl }) => {
  return (
    <div className="relative bg-oxford-blue text-white" style={{ 
        backgroundImage: `url(${imageUrl})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        height: '70vh'
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto px-6 h-full flex flex-col justify-center items-start">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl mb-8 max-w-2xl"
        >
          {subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            to={ctaLink} 
            className="bg-action-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-lg"
          >
            {ctaText}
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;