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
          options: { enableMenu: false },
          loader: {
            load: [
              'input/tex',
              'input/mml',
              'output/chtml',
              '[mml]/mml3',
              '[tex]/mhchem',
            ],
          },
          tex: {
            packages: { '[+]': ['mhchem'] },
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

      <div className="mt-3">
        <p>Here is some math:</p>
        <span
          dangerouslySetInnerHTML={{
            __html: `
          <math display="inline">
            <msub>
              <mtext>Zn&nbsp;+&nbsp;2&nbsp;H</mtext>
              <mtext>3</mtext>
            </msub>
            <msup>
              <mtext>O</mtext>
              <mtext>+</mtext>
            </msup>
            <mtext>&nbsp;</mtext><mo>→</mo>
            <msup>
              <mtext>&nbsp;Zn</mtext>
              <mrow>
                <mtext>2+</mtext>
              </mrow>
            </msup>
            <msub>
              <mtext>&nbsp;+&nbsp;H</mtext>
              <mtext>2</mtext>
            </msub>
            <msub>
              <mtext>&nbsp;+&nbsp;2&nbsp;H</mtext>
              <mtext>2</mtext>
            </msub>
            <mtext>O</mtext>
          </math>
        `,
          }}
        ></span>
      </div>
    </div>
  );
};

export default MathJaxComponent;
