'use client';

import { useState, useEffect, useRef } from 'react';

export default function CustomModalMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 p-2 bg-custom-bg rounded-full hover:bg-custom-magenta hover:bg-opacity-50 text-custom-blue focus:outline-none"
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div
            ref={modalRef}
            className="bg-white w-[300px] h-[400px] rounded-lg shadow-lg p-6 transform transition-all"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onKeyDown={handleKeyDown}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 id="modal-title" className="text-xl font-semibold">
                Menu
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-custom-blue hover:text-custom-light-blue focus:outline-none"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
