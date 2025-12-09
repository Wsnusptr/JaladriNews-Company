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
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Kesalahan Aplikasi</h2>
        <p className="text-gray-600 mb-6">{error.message || 'Terjadi kesalahan pada aplikasi'}</p>
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
