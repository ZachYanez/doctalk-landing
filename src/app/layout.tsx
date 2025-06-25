import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import GitHubPagesRedirect from "@/components/GitHubPagesRedirect";
import type { Metadata } from "next";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "DocTalk - Your AI Medical Assistant",
  description:
    "DocTalk helps you understand medical documents and health information through AI-powered conversations.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              const path = window.location.hash.substring(1);
              if (path.startsWith('/reset-password/')) {
                const token = path.split('/reset-password/')[1];
                sessionStorage.setItem('resetToken', token);
              }
            })();
          `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GitHubPagesRedirect />
        {children}
      </body>
    </html>
  );
}
