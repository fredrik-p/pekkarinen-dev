import { Metadata } from 'next';
import Link from 'next/link';
import SplitLettersText from '@/components/client/SplitLettersText';

export const metadata: Metadata = {
  title: 'fredrik pekkarinen - contact',
};

export default function Contact() {
  return (
    <main className="flex flex-col items-center justify-center h-[70vh]">
      <div className="max-w-sm">
        <h1 className="text-lg lg:text-2xl font-bold mb-4">
          For project inquires & collaboration please send and email to
        </h1>
        <Link href="mailto:hello@pekkarinen.dev">
          <SplitLettersText
            text="hello@pekkarinen.dev"
            className="block Intro-contactLinkText ColorLink mb-1 text-lg lg:text-2xl text-custom-blue"
          />
        </Link>
      </div>
    </main>
  );
}
