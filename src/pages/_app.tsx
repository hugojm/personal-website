import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '@/styles/globals.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';

ReactGA.initialize('G-M0Q306LKMJ');

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}