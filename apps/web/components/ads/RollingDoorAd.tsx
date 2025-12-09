"use client";

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export function RollingDoorAd() {
  const [isVisible, setIsVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollProgress(Math.min(scrolled, 1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const topTransform = scrollProgress * 100;
  const bottomTransform = scrollProgress * 100;

  return (
    <div className="relative w-full h-64 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-blue-500 dark:via-blue-600 dark:to-blue-700 overflow-hidden">
      {/* Top rolling door */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 bg-white dark:bg-gray-900"
        style={{
          transform: `translateY(-${topTransform}%)`,
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Bottom rolling door */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/2 bg-white dark:bg-gray-900"
        style={{
          transform: `translateY(${bottomTransform}%)`,
          transition: 'transform 0.05s linear',
        }}
      />

      {/* Ad Label */}
      <div className="absolute top-4 left-4 z-10">
        <span className="text-xs text-gray-500 dark:text-gray-400">ad</span>
      </div>

      {/* Close button */}
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 z-20 p-2 text-gray-600 dark:text-white hover:bg-black/5 dark:hover:bg-white/20 rounded-lg transition-colors"
        aria-label="Close ad"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}
