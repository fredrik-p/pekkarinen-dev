import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'pekkarinen.dev',
  description: 'Personal website of Fredrik Pekkarinen',
  metadataBase: new URL('https://hagelstudio-nqf91z4d6-fredrik-ps-projects.vercel.app/'),
  openGraph: {
    title: 'pekkarinen.dev',
    description: 'Personal website of Fredrik Pekkarinen',
    url: 'https://pekkarinen.dev',
    images:
    [
      {
        url: 'https://hagelstudio.com/opengraph-image.png',
      }, 
    ],
    locale: 'sv_SE',
    type: 'website',
  },  
  keywords: ['Pekkarinen','Frontend','Developer','Fredrik', 'Fredrik Pekkarinen'],
  publisher: 'Fredrik Pekkarinen',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
