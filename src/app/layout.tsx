import "./globals.css";

import GitHubPagesRedirect from "@/components/GitHubPagesRedirect";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
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
      <body className={`${inter.className} antialiased`}>
        <GitHubPagesRedirect />
        {children}
        <footer
          style={{
            textAlign: "center",
            padding: "1rem",
            backgroundColor: "#001f3f",
            color: "white",
          }}
        >
          <p style={{ fontSize: "0.875rem" }}>
            <a
              href="/privacy-policy"
              style={{ color: "#0077B6", textDecoration: "underline" }}
            >
              Privacy Policy
            </a>
          </p>
        </footer>
      </body>
    </html>
  );
}
