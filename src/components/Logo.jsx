import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "" }) => {
  return (
    <motion.div 
      className={`relative ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-lg"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        
        {/* Outer ring */}
        <circle 
          cx="24" 
          cy="24" 
          r="22" 
          stroke="url(#logoGradient)" 
          strokeWidth="2" 
          fill="none"
          opacity="0.3"
        />
        
        {/* Inner circle background */}
        <circle 
          cx="24" 
          cy="24" 
          r="20" 
          fill="url(#logoGradient)"
        />
        
        {/* F letter */}
        <path
          d="M18 14h10v2.5h-7v4h6v2.5h-6v7H18V14z"
          fill="white"
          fontWeight="bold"
        />
        
        {/* U letter - positioned lower */}
        <path
          d="M28 24v6c0 1.5-1 2.5-2.5 2.5h-3c-1.5 0-2.5-1-2.5-2.5v-6h2.5v6c0 0.3 0.2 0.5 0.5 0.5h2c0.3 0 0.5-0.2 0.5-0.5v-6H28z"
          fill="white"
          opacity="0.9"
        />
        
        {/* Accent dot */}
        <circle cx="32" cy="16" r="2" fill="#60a5fa" />
      </svg>
    </motion.div>
  );
};

export default Logo;
