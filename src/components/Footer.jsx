import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Youtube, Twitter, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: portfolioData.social.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.social.linkedin, label: 'LinkedIn' },
    { icon: Youtube, href: portfolioData.social.youtube, label: 'YouTube' },
    { icon: Twitter, href: portfolioData.social.twitter, label: 'Twitter' },
    { icon: Mail, href: `mailto:${portfolioData.social.email}`, label: 'Email' }
  ];

  return (
    <footer className="bg-black border-t border-blue-500/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          {/* Social links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-blue-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </motion.a>
              );
            })}
          </div>

          {/* Quick links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
            {['About', 'Experience', 'Projects', 'Reviews', 'Contact'].map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase()}`}
                whileHover={{ scale: 1.05 }}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                {link}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>© {currentYear} Frank Uwora. </span>
            {/* <Heart className="w-4 h-4 text-blue-500 fill-blue-500 animate-pulse" />
            <span>and React</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
