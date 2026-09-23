import React from 'react';
import { useSupabaseClient } from '@supabase/ssr';
import Link from 'next/link';

export default function Home() {
  const supabase = useSupabaseClient();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-indigo-600">
        Welcome to Tesla‑Sh2
      </h1>

      <p className="mt-2 text-lg text-gray-700">
        This is a clean copy of the repo with a static export and SPA fallback.
      </p>

      <Link href="/about" className="mt-4 text-base underline text-indigo-600">
        About page
      </Link>

      <pre className="mt-6 p-4 bg-gray-100 rounded text-sm max-w-xl">
        Supabase client initialized – ready to use.
      </pre>
    </div>
  );
}

/** Optional static data fetching – can be expanded later */
export async function getStaticProps() {
  return { props: {} };
}
