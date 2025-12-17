'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Our Work' },
    { href: '/stories', label: 'Stories' },
    { href: '/events', label: 'Events' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <img
                  src="/images/logo.webp"
                  alt="Healer Aid Logo"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div>
                <h1 className={`font-display font-bold text-2xl tracking-tight transition-colors ${
                  isScrolled ? 'text-neutral-900' : 'text-white'
                }`}>
                  Healer Aid
                </h1>
                <p className={`text-xs font-accent tracking-widest uppercase transition-colors ${
                  isScrolled ? 'text-neutral-600' : 'text-white/80'
                }`}>
                  Foundation
                </p>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-body text-sm font-medium tracking-wide transition-colors hover:text-primary-500 ${
                  isScrolled ? 'text-neutral-700' : 'text-white/90'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Donate Button */}
            <Link
              href="/get-involved/donate"
              className="relative px-6 py-2.5 bg-primary-500 text-white font-medium text-sm rounded-full overflow-hidden group hover:shadow-warm transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Heart className="w-4 h-4" fill="currentColor" />
                Donate Now
              </span>
              <div className="absolute inset-0 bg-primary-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-neutral-900' : 'text-white'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block py-2 font-body text-base font-medium transition-colors hover:text-primary-500 ${
                      isScrolled ? 'text-neutral-700' : 'text-white/90'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/get-involved/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-primary-500 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
                >
                  <Heart className="w-4 h-4" fill="currentColor" />
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
