import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Play, Calendar, Users, Heart } from "lucide-react";

const bannerSlides = [
  {
    image: "/images/pastor2.webp",
    title: "Welcome to RCCG Graceville",
    description:
      "A place where faith meets community. We fortify by grace, shielded by faith and clothed in love. (Ephesians 6:16; Colossians 3:14)",
  },
  {
    image: "/images/banner1.webp",
    title: "Join Our Worship",
    description: "Experience God's presence with us",
  },
  {
    image: "/images/banner3.webp",
    title: "Growing Together",
    description: "Serving God and our community",
  },
  {
    image: "/images/banner4.webp",
    title: "Checking the Bible",
    description: "Serving God and our community",
  },
  {
    image: "/images/banner5.webp",
    title: "Growing Together",
    description: "Serving God and our community",
  },
  {
    image: "/images/banner6.webp",
    title: "Growing Together",
    description: "Serving God and our community",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bannerSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" 
    className="relative w-full h-screen overflow-hidden">
     
      <AnimatePresence mode="wait">
        {bannerSlides.map((slide, index) =>
          index === currentIndex ? (
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover object-top"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              loading="lazy"
            />
          ) : null
        )}
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-12 h-full flex flex-col justify-center text-center">
        <motion.h1
          key={bannerSlides[currentIndex].title}
          className="uppercase text-2xl sm:text-4xl md:text-5xl font-bold tracking-[2px] sm:tracking-[6px] text-white mb-3 sm:mb-4 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          {bannerSlides[currentIndex].title}
        </motion.h1>

        <motion.p
          key={bannerSlides[currentIndex].description}
          className="text-white/90 text-sm sm:text-base md:text-lg max-w-md sm:max-w-2xl mx-auto mb-6 sm:mb-8 px-2 leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {bannerSlides[currentIndex].description}
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
          <a
            href="https://www.youtube.com/@gracevillerccg693"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-purple-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-600 transition-all duration-300 font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:scale-105">
              <Play className="w-5 h-5" />
              Watch Live Service
            </button>
          </a>
          {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-300 font-semibold text-lg">
            Plan Your Visit
          </button> */}
        </div>

        {/* Quick Stats */}
        <div className="hidden sm:grid grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12 px-4">
          {[
            { icon: Users, value: "500+", label: "Members" },
            { icon: Calendar, value: "15+", label: "Years Serving" },
            { icon: Heart, value: "10+", label: "Ministries" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="text-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-5 sm:p-6">
                <Icon className="w-8 h-8 text-purple-900 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{value}</div>
                <div className="text-blue-100 text-sm sm:text-base">{label}</div>
              </div>
            </div>
          ))}
        </div>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <button className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-red-600 transition-all duration-300 font-semibold text-base sm:text-lg items-center justify-center gap-2 hover:scale-105 mt-6 sm:mt-8 blinking-button">
            Register Your Business
          </button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
