import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code, Blocks, Bot, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { experience } = portfolioData;

  const icons = [Award, Code, Blocks, Bot, TrendingUp];

  return (
    <section id="experience" className="py-20 sm:py-32 bg-black relative overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl top-0 right-0 transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-3xl bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Experience & <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experience.map((category, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative"
              >
                {/* Glowing background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-600/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full bg-gradient-to-br from-gray-900/90 to-gray-950/90 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300">
                  {/* Icon */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.category}</h3>
                  </div>

                  {/* Items */}
                  <ul className="space-y-2.5">
                    {category.items.map((item, itemIndex) => (
                      <motion.li
                        key={itemIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                        className="flex items-start gap-2 text-gray-300 group/item"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform" />
                        <span className="group-hover/item:text-white transition-colors">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
