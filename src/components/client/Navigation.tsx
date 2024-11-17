'use client';

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { splitLetters } from '@/utils/splitLetters';

const Navigation = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    splitLetters();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        id="topNav"
        ref={menuRef}
        data-content-field="navigation"
        className="flex-grow relative z-10"
      >
        {/* Burger Menu Button - Only visible on mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded transition-colors duration-200"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`h-0.5 w-full bg-custom-medium-blue rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`h-0.5 w-full bg-custom-medium-blue rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`h-0.5 w-full bg-custom-medium-blue rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </div>
        </button>

        {/* Navigation Menu */}
        <nav
          className={`main-nav ${isOpen ? 'block' : 'hidden'} md:block absolute md:relative left-0 right-0 top-10 md:top-0 bg-white rounded-lg shadow-sm md:shadow-none md:bg-transparent p-4 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 md:pt-0">
            <li>
              <Link
                href="/"
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
                className="text-custom-medium-blue hover:text-custom-light-blue active:text-custom-light-blue transition-colors duration-200"
              >
                Instagram
              </a>
            </li>

            <li>
              <Link
                href="/contact"
                onClick={handleLinkClick}
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
