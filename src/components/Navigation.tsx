import Link from 'next/link';
import React from 'react';
import { buttonVariants } from './ui/button';
import { Icons } from './icons';
import ThemeSwitch from './ThemeSwitch';

const Navigation = (): JSX.Element => {
  return (
    <div className="max-w-5xl px-8 mx-auto">
      <div className="flex items-center justify-between py-6">
        <nav>
          <Link href="/">
            <a className="text-gray-900 dark:text-white pr-6 py-4">Home</a>
          </Link>
          <Link href="/about">
            <a className="text-gray-900 dark:text-white px-6 py-4">About</a>
          </Link>
        </nav>
        <nav className="flex items-center space-x-1">
          <Link
            href={'https://github.com/Marjannnnnn'}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}
            >
              <Icons.gitHub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link
            href={'https://www.instagram.com/__kevnnn_/'}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={buttonVariants({
                size: 'sm',
                variant: 'ghost',
              })}
            >
              <Icons.instagram className="h-5 w-5 fill-current" />
              <span className="sr-only">Instagram</span>
            </div>
          </Link>
          <ThemeSwitch />
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
