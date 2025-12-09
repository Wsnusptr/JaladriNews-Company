"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

interface Category {
  label: string;
  slug: string;
}

const topCategories: Category[] = [
  { label: 'Olahraga', slug: 'olahraga' },
  { label: 'Politik', slug: 'politik' },
  { label: 'Teknologi', slug: 'teknologi' },
  { label: 'Kesehatan', slug: 'kesehatan' },
  { label: 'Ekonomi', slug: 'ekonomi' },
  { label: 'Hiburan', slug: 'hiburan' },
  { label: 'Lifestyle', slug: 'lifestyle' },
  { label: 'Video', slug: 'video' },
  { label: 'Semua', slug: 'semua' },
];

export function TopCategoryNav() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <nav className="
      bg-white dark:bg-gradient-to-r dark:from-slate-950 dark:via-blue-950 dark:to-slate-950
      border-b border-gray-200/50 dark:border-blue-900/50
      sticky top-16 z-20 shadow-lg
    ">
      <div className="container mx-auto px-4 lg:px-6">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={'auto'}
          centeredSlides={false}
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          speed={800}
          className="py-0 flex justify-center"
          style={{ width: '100%' }}
        >
          {topCategories.map((category) => (
            <SwiperSlide key={category.slug} className="!w-auto">
              <Link
                href={`/kategori/${category.slug}`}
                onMouseEnter={() => setActiveCategory(category.slug)}
                onMouseLeave={() => setActiveCategory(null)}
                className={`
                  relative block px-5 py-4 text-sm font-semibold
                  whitespace-nowrap transition-all duration-300 ease-in-out
                  ${activeCategory === category.slug
                    ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-blue-600/40'
                    : 'text-gray-700 dark:text-blue-100 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-blue-600/20'
                  }
                  focus:outline-none focus:ring-2 focus:ring-blue-400/30
                `}
              >
                {category.label}
                
                {/* Animated bottom border */}
                <div className={`
                  absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-cyan-400
                  transition-all duration-300 ease-in-out
                  ${activeCategory === category.slug ? 'opacity-100' : 'opacity-0'}
                `} />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </nav>
  );
}
