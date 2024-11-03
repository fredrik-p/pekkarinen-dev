'use client';

import { useEffect } from 'react';
import { splitLetters } from '@/utils/splitLetters';

export default function Home() {
  useEffect(() => {
    splitLetters();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 w-full max-w-5xl font-mono text-sm mx-auto text-left">
        <p>
          I&apos;m Fredrik Pekkarinen, a frontend developer based in Malmö,
          Sweden.
        </p>
        <div className="flex items-center mt-1">
          <a
            className="Intro-contactLink inline-flex items-center space-x-2"
            href="mailto:hello@pekkarinen.dev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5 transform inline-block"
            >
              <path
                fillRule="evenodd"
                d="M3.75 3a.75.75 0 0 1 .75.75v7.5h10.94l-1.97-1.97a.75.75 0 0 1 1.06-1.06l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 1 1-1.06-1.06l1.97-1.97H3.75A.75.75 0 0 1 3 12V3.75A.75.75 0 0 1 3.75 3Z"
                clipRule="evenodd"
              />
            </svg>

            <span className="Intro-contactLinkText ColorLink js-splitLetters">
              Get in touch
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
