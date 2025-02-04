import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core';
import PageAnimatePresence from '../components/PageAnimatePresence';

export const metadata = {
  title: 'Jason Zhang',
  description: 'A playground for me',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <PageAnimatePresence>
          <MantineProvider>{children}</MantineProvider>
        </PageAnimatePresence>
      </body>
    </html>
  );
}
