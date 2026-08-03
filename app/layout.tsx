import type { Metadata } from 'next';
import { Inter, Geist } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'DevPortfolio | Premium Freelance Full-Stack Developer',
  description: 'Full-stack developer specializing in high-performance web applications and premium digital interfaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} dark`}>
      <body className="bg-background text-on-background font-body-md antialiased selection:bg-primary selection:text-on-primary-container" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
