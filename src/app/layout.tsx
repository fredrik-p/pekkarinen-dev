import type { Metadata } from "next";
import Script from 'next/script';
import { Outfit } from "next/font/google";
import InteractiveBackground from './interactive-background';
import Header from '@/components/server/Header';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'pekkarinen.dev',
  description: 'Personal website of Fredrik Pekkarinen',
  metadataBase: new URL(
    'https://hagelstudio-nqf91z4d6-fredrik-ps-projects.vercel.app/',
  ),
  openGraph: {
    title: 'pekkarinen.dev',
    description: 'Personal website of Fredrik Pekkarinen',
    url: 'https://pekkarinen.dev',
    images: [
      {
        url: 'https://hagelstudio.com/opengraph-image.png',
      },
    ],
    locale: 'sv_SE',
    type: 'website',
  },
  keywords: [
    'Pekkarinen',
    'Frontend',
    'Developer',
    'Fredrik',
    'Fredrik Pekkarinen',
  ],
  publisher: 'Fredrik Pekkarinen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <Script id="MathJax-script" src="/mathjax/es5/tex-mml-chtml.js" async />
      </head>
      <body className={outfit.className}>
        <div className="container mx-auto px-10 pt-10 lg:pt-20">
          <InteractiveBackground />
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
