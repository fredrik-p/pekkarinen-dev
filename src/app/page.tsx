'use client';

import { useEffect } from 'react';
import { splitLetters } from '@/utils/splitLetters';

export default function Home() {
  useEffect(() => {
    splitLetters();
  }, []);

  return (
    <main className="flex max-h-screen flex-col items-center p-5 md:p-24">
      <div className="z-10 w-full max-w-5xl text-xl mx-auto text-left">
        <p>Hi, I am a frontend developer based in Malmö, Sweden.</p>
      </div>
    </main>
  );
}
