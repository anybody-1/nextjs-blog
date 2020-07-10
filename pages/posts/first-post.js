import Head from "next/head";
import React from "react";
import png from "assets/images/1.png";
import Link from "next/link";
export default function First() {
  return (
    <>
      {/* <Head>
        <title>博客</title>
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div>
        post-first
        <hr />
        <Link href="/">
          <a>回到首页</a>
        </Link>
        <img src={png} alt="" />
      </div>
    </>
  );
}
