import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '@/styles/globals.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

ReactGA.initialize('G-M0Q306LKMJ');

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Html lang="en">
        <Head>
          <DefaultSeo {...SEO} />
        </Head>
        <body>
          <Navigation />
          <Component {...pageProps} />
          <NextScript />
        </body>
      </Html>
    </>
  );
}