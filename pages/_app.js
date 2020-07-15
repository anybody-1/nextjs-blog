import "styles/global.scss";
import Head from "next/head";
import React from "react";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>lsy的博客系统</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
