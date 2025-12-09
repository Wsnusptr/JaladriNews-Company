'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-gray-900">
      <div className="text-center px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Kesalahan Aplikasi</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{error.message || 'Terjadi kesalahan pada aplikasi'}</p>
        <button
          onClick={() => reset()}
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Muat Ulang
        </button>
      </div>
    </div>
  );
}
