'use client';

import { useEffect } from 'react';
import { splitLetters } from '@/utils/splitLetters';
import SplitLettersText from '@/components/client/SplitLettersText';
import TechMenu from '@/components/client/TechMenu';

export default function Home() {
  useEffect(() => {
    // Wait for next tick to ensure DOM is ready
    const timer = setTimeout(() => {
      splitLetters();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex max-h-screen flex-col items-center p-5 md:p-24">
      <div className="z-10 w-full max-w-5xl text-xl mx-auto text-left">
        <SplitLettersText
          text="Hi, I am a frontend developer based in Malmö, Sweden."
          component="p"
        />
        <div>
          <TechMenu />
        </div>
      </div>
    </main>
  );
}
