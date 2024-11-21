'use client';

import { useEffect } from 'react';

// Declare MathJax on the window object
declare global {
  interface Window {
    MathJax: any;
  }
}
const MathJaxComponent = () => {
  useEffect(() => {
    const initMathJax = () => {
      if (typeof window !== 'undefined' && window.MathJax) {
        window.MathJax = {
          loader: { load: ['input/tex', 'output/chtml'] },
          tex: {
            inlineMath: [
              ['$', '$'],
              ['\\(', '\\)'],
            ],
          },
          svg: { fontCache: 'global' },
        };
        window.MathJax.typesetPromise = () => {
          return new Promise((resolve, reject) => {
            try {
              window.MathJax.typeset();
              resolve(true);
            } catch (error) {
              reject(error);
            }
          });
        };
      }
    };

    initMathJax();

    if (window.MathJax && window.MathJax.typesetPromise) {
      window.MathJax.typesetPromise();
    }
  }, []);

  return (
    <div>
      <h1>MathJax Example</h1>
      <p>
        Here is some math:{' '}
        <span>{`$Zn + 2H_3O^+ \\rightarrow Zn^{2+} + H_2 + 2H_2O$`}</span>
      </p>
    </div>
  );
};

export default MathJaxComponent;
