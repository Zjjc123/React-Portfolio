import '@mantine/core/styles.css';

import React from 'react';
import { Box, ColorSchemeScript, MantineProvider } from '@mantine/core';

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
        <MantineProvider>
          <Box
            py="xl"
            style={{
              backgroundColor: '#f0f0f0',
              minHeight: '100vh',
              backgroundImage: 'radial-gradient(#a0a0a0 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          >
            {children}
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
