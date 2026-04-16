import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(0);
  const { hero } = portfolioData;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % hero.rotatingTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [hero.rotatingTitles.length]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-end order-2 lg:order-1"
          >
            <div className="relative group">
              {/* Orbiting ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full"
              >
                <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-500 rounded-full blur-sm" style={{ transform: 'translate(-50%, -100%)' }} />
              </motion.div>

              {/* Glowing aura */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl animate-pulse" />

              {/* Main image container */}
              <motion.div
                whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-pulse" />
                <div className="absolute inset-2 rounded-full border border-blue-400/20" />
                
                <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-blue-500/50 shadow-2xl shadow-blue-500/20 bg-black flex items-center justify-center p-4">
                  <img
                    src={hero.image}
                    alt="Frank Uwora"
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      opacity: [0.3, 0.7, 0.3]
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    className="absolute w-2 h-2 bg-blue-400 rounded-full blur-sm"
                    style={{
                      top: `${20 + i * 25}%`,
                      left: `${90}%`
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white order-1 lg:order-2 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-6 justify-center lg:justify-start"
            >
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium tracking-wider uppercase">Available for Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4"
            >
              {hero.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-gray-300 mb-6"
            >
              {hero.title}
            </motion.p>

            {/* Rotating titles */}
            <div className="h-16 mb-8 flex items-center justify-center lg:justify-start">
              <motion.div
                key={currentTitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              >
                {hero.rotatingTitles[currentTitle]}
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 group"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  variant="outline"
                  className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-6 text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
                >
                  Let's Work Together
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
