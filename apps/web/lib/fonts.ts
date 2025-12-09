import localFont from 'next/font/local';

export const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-inter',
});

export const galter = localFont({
  src: [
    {
      path: '../public/fonts/Galter.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Galter.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-galter',
});

export const lilmarie = localFont({
  src: [
    {
      path: '../public/fonts/Lilmarie.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lilmarie.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Lilmarie.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-lilmarie',
});

export const astraaleCouture = localFont({
  src: [
    {
      path: '../public/fonts/Astrale Couture.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-astrale-couture',
});