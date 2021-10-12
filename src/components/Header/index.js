import React from 'react';
import Head from 'next/head';
import { HeaderContainer } from './styles';

export default function Header () {
  return (
    <React.Fragment>
      <Head>
        <title>password artisan</title>
        <meta name="description" content="yet another password generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderContainer>
        <h1>password artisan</h1>
      </HeaderContainer>
    </React.Fragment>
  );
};
