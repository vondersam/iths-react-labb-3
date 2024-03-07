import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.css'

import Container from 'react-bootstrap/Container';

import Header from './components/header';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stockholm Transport Emissions Calculator',
  description: 'Calculate the emissions by public transport in Stockholm.'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Container className="mt-3">
            <Header />
            {children}
          </Container>
        </main>
      </body>
    </html>
  );
}
