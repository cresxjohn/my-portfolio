import FlareCursor from '@/components/ui/FlareCursor';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import clsx from 'clsx';
import local from 'next/font/local';
import { FC } from 'react';
import '../../styles/globals.css';
import Head from '../head';

const graphik = local({
  src: [
    {
      path: '../../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-graphik',
  display: 'swap'
});

interface Props {
  children: React.ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        graphik.variable
      )}
    >
      <Head />

      <body className="bg-[#080809] transition ease">
        <Header />

        <main className="flex flex-col justify-center items-center mx-auto">
          <FlareCursor />

          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
};

export default RootLayout;
