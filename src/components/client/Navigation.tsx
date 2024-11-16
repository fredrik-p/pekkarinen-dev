'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { splitLetters } from '@/utils/splitLetters';

const Navigation = () => {
  const pathname = usePathname();
  useEffect(() => {
    splitLetters();
  }, []);
  return (
    <>
      <div
        id="topNav"
        data-content-field="navigation"
        className="flex-grow relative z-10"
      >
        <nav className="main-nav">
          <ul className="flex space-x-6">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'text-custom-light-blue'
                    : 'text-custom-medium-blue'
                } hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200`}
              >
                Work
              </Link>
            </li>

            <li>
              <a
                href="https://www.instagram.com/heyfred"
                target="_blank"
                rel="noopener noreferrer"
                className="text-custom-medium-blue hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200"
              >
                Instagram
              </a>
            </li>

            <li>
              {' '}
              <Link
                href="/contact"
                className={`${
                  pathname === '/contact'
                    ? 'text-custom-light-blue'
                    : 'text-custom-medium-blue'
                } hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Link href="/">
        <h1 className="text-custom-blue text-xl lg:text-2xl font-bold Intro-contactLinkText ColorLink js-splitLetters">
          Fredrik Pekkarinen
        </h1>
      </Link>
    </>
  );
};

export default Navigation;
