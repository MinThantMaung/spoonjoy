import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/app/components/_nav/page"
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spoonjoy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
         {/* Add your Google Site Verification meta tag here */}
         <meta name="google-site-verification" content="7FCbr0FOZIS_rxi8hEM2KL6UZLdzWPRt2SsAA3m92k0" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-[#d4f1fc] to-white min-h-screen flex flex-col`}>
        <nav>
          <Nav />
        </nav>
        {children}
      </body>
    </html>
  );
}
