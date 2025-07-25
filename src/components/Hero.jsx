import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, User } from "lucide-react";

// --- Sub-Components for Readability ---

const DecorativeBlobs = () => (
  <div className="absolute inset-0" aria-hidden="true">
    <motion.div
      className="absolute top-20 left-10 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-30"
      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute bottom-20 right-20 w-96 h-96 bg-gray-100 rounded-full blur-3xl opacity-40"
      animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
    />
  </div>
);

const ScrollIndicator = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 2 }}
    className="absolute bottom-8 left-1/2 -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2"
    >
      <div className="w-1 h-2 bg-red-500 rounded-full" />
    </motion.div>
  </motion.div>
);

const HeroContent = ({ title, subtitle, ctaText, ctaLink }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="space-y-8"
  >
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 border border-red-100"
    >
      <span className="text-sm font-medium text-red-600">
        ✨ Welcome to Excellence
      </span>
    </motion.div>

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tighter"
    >
      <span className="text-gray-900 block">
        {title || "Building Tomorrow's Landmarks"}
      </span>
      <span className="text-gray-700 block">Built on Trust.</span>
      <span className="bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent block">
        Delivered with Excellence.
      </span>
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="text-base md:text-lg text-gray-600 leading-relaxed max-w-xl"
    >
      {subtitle ||
        "Delivering sustainable infrastructure and building solutions with excellence and innovation."}
    </motion.p>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="flex flex-col sm:flex-row items-center gap-6"
    >
      <Link
        to={ctaLink || "/projects"}
        className="group px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg inline-flex items-center justify-center"
        aria-label="Explore our projects"
      >
        <span className="flex items-center gap-2">
          {ctaText || "Explore Our Projects"}
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>

      <button
        className="group flex items-center gap-3 text-gray-700 font-medium hover:text-red-600 transition-colors duration-300"
        aria-label="Watch our story"
      >
        <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center group-hover:bg-red-50 group-hover:border-red-200 transition-all duration-300 shadow-sm">
          <Play className="w-5 h-5 ml-1 text-red-600" />
        </div>
        Watch Our Story
      </button>
    </motion.div>
  </motion.div>
);

const HeroImage = ({ imageUrl }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 0.4 }}
    className="relative flex justify-center items-center"
  >
    <div className="relative w-80 h-96 md:w-96 md:h-[500px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-20px] rounded-full border border-red-100 opacity-50"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-[-40px] rounded-full border border-gray-100 opacity-50"
      />
      <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={imageUrl}
          alt="DHD Group Professional Model"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

// --- Main Hero Component ---

const Hero = ({ title, subtitle, ctaText, ctaLink, imageUrl }) => {
  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      <DecorativeBlobs />

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          <HeroContent
            title={title}
            subtitle={subtitle}
            ctaText={ctaText}
            ctaLink={ctaLink}
          />
          <HeroImage imageUrl={imageUrl || heroImageSrc} />
        </div>
      </div>

      <ScrollIndicator />
    </div>
  );
};

export default Hero;
