"use client";

import Link from 'next/link';
import { footerLinkColumns, socialLinks } from '@/lib/footer-data';
import Image from 'next/image';
import { ArrowUp, Mail, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { SocialIcon } from '../shared/SocialIcon';

const LinkColumn = ({ title, links }: { title: string, links: { label: string, href: string }[] }) => (
  <div className="space-y-3">
    <h3 className="font-bold font-lilmarie text-gray-900 dark:text-white text-base">{title}</h3>
    <ul className="space-y-2">
      {links.map(link => (
        <li key={link.label}>
          <Link 
            href={link.href} 
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-xs md:text-sm font-galter transition-colors block hover:translate-x-1"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribeStatus('loading');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      
      if (response.ok) {
        setSubscribeStatus('success');
        setEmail('');
        setTimeout(() => setSubscribeStatus('idle'), 3000);
      } else {
        setSubscribeStatus('error');
        setTimeout(() => setSubscribeStatus('idle'), 3000);
      }
    } catch (error) {
      setSubscribeStatus('error');
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  return (
    <footer className="relative mt-20 font-galter">
      {/* Main Footer */}
      <div>
        <div className="container mx-auto px-4 lg:px-6 pt-16 pb-8">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
            
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2 space-y-8">
              <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center gap-4">
                <div className="relative">
                  <Image src="/logo.png" alt="jaladri news logo" width={80} height={80}/>
                </div>
                <div>
                  <h2 className="text-2xl font-bold font-lilmarie">
                    <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                      Jaladri News
                    </span>
                  </h2>
                </div>
              </div>

              <div>
                <h4 className="font-semibold font-lilmarie mb-4 text-gray-900 dark:text-white text-center md:text-left">
                  Connect With Us
                </h4>
                <div className="flex space-x-3 justify-center md:justify-start">
                  {socialLinks.map(social => (
                    <Link 
                      key={social.label} 
                      href={social.href} 
                      className="
                        group w-10 h-10 flex items-center justify-center
                        bg-white/50 dark:bg-gray-800/50 backdrop-blur-edge
                        border border-gray-200/50 dark:border-gray-700/50
                        rounded-edge hover:bg-edge-500 dark:hover:bg-edge-500
                        hover:border-edge-500 hover:shadow-edge-md
                        transition-all duration-300 ease-edge
                        hover:scale-110 hover:-translate-y-1
                      "
                      aria-label={social.label}
                    >
                      <SocialIcon 
                        name={social.iconName as any} 
                        className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" 
                      />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Columns */}
            <LinkColumn title="Kategori" links={footerLinkColumns.kategori} />
            <LinkColumn title="Layanan" links={footerLinkColumns.layanan} />
            <LinkColumn title="Informasi" links={footerLinkColumns.informasi} />
            <LinkColumn title="Edge Network" links={footerLinkColumns.jaringanMedia} />
          </div>

          {/* Mobile Layout - Centered */}
          <div className="md:hidden mb-12">
            {/* Logo + Brand + Subtitle */}
            <div className="flex flex-col items-center text-center gap-3 mb-6 pb-6 border-b border-gray-200/50 dark:border-gray-700/50">
              <Image src="/logo.png" alt="jaladri news logo" width={60} height={60}/>
              <div>
                <h2 className="text-2xl font-bold font-lilmarie">
                  <span className="bg-gradient-to-r from-red-600 via-orange-500 to-red-600 bg-clip-text text-transparent">
                    Jaladri News
                  </span>
                </h2>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Portal Berita Terpercaya Indonesia</p>
              </div>

              {/* Social Icons - Below Subtitle */}
              <div className="flex space-x-3 justify-center mt-4">
                {socialLinks.map(social => (
                  <Link 
                    key={social.label} 
                    href={social.href} 
                    className="
                      group w-9 h-9 flex items-center justify-center
                      bg-white/50 dark:bg-gray-800/50 backdrop-blur-edge
                      border border-gray-200/50 dark:border-gray-700/50
                      rounded-edge hover:bg-blue-500 dark:hover:bg-blue-500
                      hover:border-blue-500 hover:shadow-edge-md
                      transition-all duration-300 ease-edge
                    "
                    aria-label={social.label}
                  >
                    <SocialIcon 
                      name={social.iconName as any} 
                      className="w-4 h-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors" 
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* 2x2 Grid - Centered */}
            <div className="grid grid-cols-2 gap-8 mb-8 px-4">
              <div className="text-center">
                <LinkColumn title="Kategori" links={footerLinkColumns.kategori.slice(0, 4)} />
              </div>
              <div className="text-center">
                <LinkColumn title="Layanan" links={footerLinkColumns.layanan} />
              </div>
              <div className="text-center">
                <LinkColumn title="Informasi" links={footerLinkColumns.informasi} />
              </div>
              <div className="text-center">
                <LinkColumn title="Network" links={footerLinkColumns.jaringanMedia.slice(0, 3)} />
              </div>
            </div>
          </div>

          {/* Email Subscription Section */}
          <div className="mb-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg md:text-xl font-bold font-lilmarie text-gray-900 dark:text-white mb-2 text-center">
                Berlangganan Newsletter
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                Dapatkan update berita terbaru langsung ke inbox Anda
              </p>
              
              <form onSubmit={handleSubscribe} className="flex">
                <div className="flex-1 relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Masukkan email Anda"
                    required
                    className="
                      w-full pl-10 pr-4 py-3 rounded-l-lg
                      bg-white dark:bg-gray-800
                      border border-gray-200 dark:border-gray-700
                      text-gray-900 dark:text-white
                      placeholder-gray-500 dark:placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-blue-500/50
                      text-sm
                    "
                  />
                </div>
                <button
                  type="submit"
                  disabled={subscribeStatus === 'loading'}
                  className="
                    px-4 py-3 rounded-r-lg
                    bg-gradient-to-r from-blue-600 to-blue-700
                    hover:from-blue-700 hover:to-blue-800
                    text-white font-semibold
                    transition-all duration-300
                    disabled:opacity-50 disabled:cursor-not-allowed
                    flex items-center gap-2
                  "
                >
                  {subscribeStatus === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              </form>
              
              {subscribeStatus === 'success' && (
                <p className="text-sm text-green-600 dark:text-green-400 mt-2 text-center">
                  ✓ Terima kasih telah berlangganan!
                </p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-2 text-center">
                  ✗ Terjadi kesalahan. Coba lagi.
                </p>
              )}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="
            flex flex-col md:flex-row items-center justify-between 
            pt-8 border-t border-gray-200/50 dark:border-gray-700/50
            text-xs md:text-sm text-gray-600 dark:text-gray-400
          ">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p>
                © {new Date().getFullYear()} Jaladri Company. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center gap-4 md:gap-6">
              <Link 
                href="/privacy" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="
            fixed bottom-8 right-8 z-50
            w-12 h-12 flex items-center justify-center
            bg-blue-600 hover:bg-blue-700 text-white
            rounded-full shadow-lg hover:shadow-xl
            transition-all duration-300 ease-edge
            hover:scale-110 hover:-translate-y-1
            focus:outline-none focus:ring-2 focus:ring-blue-500/20
          "
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
