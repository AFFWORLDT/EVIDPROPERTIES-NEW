import React from 'react';
import Header from '../../components/common/header';
import Footer from '../../components/common/footer';
import { CurrencyProvider } from '@/src/lib/currency';

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CurrencyProvider>
      <main className="min-h-screen">
        <Header />
        {children}
        <Footer />
      </main>
    </CurrencyProvider>
  );
}
