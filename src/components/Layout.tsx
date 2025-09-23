import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { WhatsAppFloat } from './WhatsAppFloat';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>{children}</main>
      <WhatsAppFloat />
    </div>
  );
}