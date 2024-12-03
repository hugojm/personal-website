import type { AppProps } from 'next/app';
import Navigation from '@/components/Navigation';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import '@/styles/globals.css';
import ReactGA from 'react-ga';
import { useEffect } from 'react';
import Head from 'next/head';

ReactGA.initialize('G-M0Q306LKMJ');

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Head>
        <script type="text/javascript">
          {`var _iub = _iub || [];
          _iub.csConfiguration = {"siteId":3858144,"cookiePolicyId":23602836,"lang":"en","storage":{"useSiteId":true}};`}
        </script>
        <script type="text/javascript" src="https://cs.iubenda.com/autoblocking/3858144.js"></script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/gpp/stub.js"></script>
        <script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}