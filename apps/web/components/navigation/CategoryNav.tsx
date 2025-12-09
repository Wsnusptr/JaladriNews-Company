"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Grid } from 'lucide-react';

const categories = [
  { name: 'Olahraga', slug: 'olahraga', color: 'text-green-600' },
  { name: 'Politik', slug: 'politik', color: 'text-red-600' },
  { name: 'Teknologi', slug: 'teknologi', color: 'text-blue-600' },
  { name: 'Kesehatan', slug: 'kesehatan', color: 'text-purple-600' },
  { name: 'Ekonomi', slug: 'ekonomi', color: 'text-yellow-600' },
  { name: 'Hiburan', slug: 'hiburan', color: 'text-pink-600' },
  { name: 'Lifestyle', slug: 'lifestyle', color: 'text-orange-600' },
  { name: 'Video', slug: 'video', color: 'text-indigo-600' },
];

interface CategoryNavProps {
  variant?: 'horizontal' | 'dropdown';
  className?: string;
}

export function CategoryNav({ variant = 'horizontal', className = '' }: CategoryNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (variant === 'dropdown') {
    return (
      <div className={`relative ${className}`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          <Grid className="w-4 h-4" />
          <span className="text-gray-700 dark:text-gray-300">Kategori</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
            <div className="p-2">
              <div className="grid grid-cols-2 gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/kategori/${category.slug}`}
                    className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className={`w-2 h-2 rounded-full bg-current ${category.color}`} />
                    {category.name}
                  </Link>
                ))}
              </div>
              <div className="mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                <Link
                  href="/kategori"
                  className="block px-3 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Lihat Semua Kategori →
                </Link>
              </div>
            </div>
          </div>
        )}
        
        {isOpen && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
        )}
      </div>
    );
  }

  return (
    <nav className={`bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:via-blue-950 dark:to-slate-950 border-b border-gray-200/50 dark:border-blue-900/50 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-1 overflow-x-auto md:overflow-visible md:justify-center py-3">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/kategori/${category.slug}`}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-100 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/20 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400/30"
            >
              <div className={`w-2 h-2 rounded-full bg-current ${category.color}`} />
              {category.name}
            </Link>
          ))}
          <Link
            href="/kategori"
            className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 dark:text-blue-100 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/20 rounded-lg transition-colors whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-blue-400/30"
          >
            <Grid className="w-4 h-4" />
            Semua
          </Link>
        </div>
      </div>
    </nav>
  );
}
