import './global.css';
import { Inter } from "next/font/google";
import { MantineProvider } from '@mantine/core';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </head>
      <body>
        <MantineProvider
          theme={{
            fontFamily: inter.style.fontFamily,
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
