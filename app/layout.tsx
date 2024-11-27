import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PrimeReactProvider } from 'primereact/api';
import "./globals.css";
import 'primereact/resources/themes/saga-blue/theme.css'; 
import 'primereact/resources/primereact.min.css'; 
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <PrimeReactProvider>
       <body className={inter.className}>{children}</body>
       </PrimeReactProvider>
      
    </html>
  );
}
