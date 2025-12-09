import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center px-4">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">404</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
          Halaman yang Anda cari tidak ditemukan
        </p>
        <Link
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition inline-block"
        >
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
