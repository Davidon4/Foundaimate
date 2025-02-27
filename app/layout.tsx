import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

import {
  ClerkProvider
} from '@clerk/nextjs';
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "foundaimate",
  description: "Build your ai app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-secondary", `${geistSans.variable} ${geistMono.variable}  bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`)}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Toaster/>
          </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
