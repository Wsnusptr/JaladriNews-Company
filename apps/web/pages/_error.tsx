import type { NextPageContext } from 'next';

interface ErrorProps {
  statusCode?: number;
}

export default function Error({ statusCode }: ErrorProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          {statusCode ? `Error ${statusCode}` : 'Kesalahan Aplikasi'}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {statusCode === 404
            ? 'Halaman yang Anda cari tidak ditemukan'
            : statusCode === 500
            ? 'Terjadi kesalahan di server'
            : 'Terjadi kesalahan pada aplikasi'}
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition inline-block"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
