'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Heart, ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Breaking the Cycle',
      subtitle: 'of Poverty',
      description: 'Empowering vulnerable communities across West Bengal through sustainable support in health, education, and livelihoods.',
      theme: 'health',
      image: '/images/banner1.jpg'
    },
    {
      title: 'Nourishing Hope',
      subtitle: 'Building Futures',
      description: 'Supporting 225+ children year-round with nutrition, education, and care that transforms lives.',
      theme: 'education',
      image: '/images/banner2.jpg'
    },
    {
      title: 'From Survival',
      subtitle: 'to Self-Reliance',
      description: 'Training 85+ individuals in livelihood skills, creating pathways to economic independence.',
      theme: 'livelihood',
      image: '/images/banner3.jpg'
    },
    {
      title: 'Celebrating Together',
      subtitle: 'with Dignity',
      description: 'Bringing joy to 630+ children during festivals, ensuring no one is left behind.',
      theme: 'celebration',
      image: '/images/banner4.jpg'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative h-screen overflow-hidden bg-neutral-900">
      {/* Background Images with Ken Burns Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.1 }}
          exit={{ opacity: 0, scale: 1 }}
          transition={{ duration: 8, ease: 'linear' }}
          className="absolute inset-0"
        >
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/50 via-neutral-900/40 to-secondary-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative h-full container mx-auto px-6 flex items-center pb-48 md:pb-32">
        <div className="max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-4 md:space-y-8"
            >
              {/* Eyebrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <div className="w-16 h-[2px] bg-gradient-warm" />
                <span className="text-primary-300 font-accent text-sm tracking-[0.3em] uppercase">
                  Healer Aid Foundation
                </span>
              </motion.div>

              {/* Main Headline */}
              <div className="space-y-2">
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-white"
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="font-display font-bold text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-none text-gradient-warm"
                >
                  {slides[currentSlide].subtitle}
                </motion.h2>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-neutral-200 text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 md:gap-4 pt-2 md:pt-4 relative z-20"
              >
                <Link
                  href="/get-involved/donate"
                  className="group relative px-6 py-3 md:px-8 md:py-4 bg-primary-500 text-white text-sm md:text-base font-semibold rounded-full overflow-hidden hover:shadow-warm transition-all duration-300"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Heart className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" />
                    Donate Now
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>

                <Link
                  href="/about"
                  className="group px-6 py-3 md:px-8 md:py-4 border-2 border-white/30 text-white text-sm md:text-base font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    Learn Our Story
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Decorative Element - Large Letter */}
        <div className="hidden xl:block absolute right-0 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
          <span className="font-display font-black text-[30rem] leading-none text-white">
            {slides[currentSlide].theme[0].toUpperCase()}
          </span>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-20 md:bottom-24 left-6 md:left-12 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={`h-1 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? 'w-16 bg-primary-500'
                : 'w-8 bg-white/30 group-hover:bg-white/50'
            }`} />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors group"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-sm font-medium tracking-wider uppercase">Scroll</span>
        <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </motion.button>

      {/* Stats Bar - Floating */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md border-t border-white/20 z-10"
      >
        <div className="container mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '225+', label: 'Children Supported' },
              { number: '5', label: 'Districts Covered' },
              { number: '85+', label: 'Skills Trained' },
              { number: '630+', label: 'Festival Joy' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-[10px] md:text-xs lg:text-sm text-neutral-300 tracking-wider uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
