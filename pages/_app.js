import Head from 'next/head';
import React, { useEffect } from 'react';

import BaseComponents from '../components/base';

function MyApp(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>
      <BaseComponents Component={Component} pageProps={pageProps} />
    </>
  );
}

export default MyApp;
