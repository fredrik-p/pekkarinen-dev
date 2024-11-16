import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'fredrik pekkarinen - contact',
};

const Contact = () => {
  return (
    <main className="flex flex-col items-center justify-center h-[70vh]">
      <div className="max-w-sm">
        <h1 className="text-lg lg:text-2xl font-bold mb-4">
          For project inquires & collaboration please send and email to
        </h1>
        <a
          href="mailto:hello@pekkarinen.dev"
          className="block text-custom-blue Intro-contactLinkText ColorLink js-splitLetters mb-1 text-lg lg:text-2xl"
        >
          hello@pekkarinen.dev
        </a>
      </div>
    </main>
  );
};

export default Contact;
