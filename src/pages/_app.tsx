import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import { Toaster } from '../components/ui/toaster';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
};

export default MyApp;
