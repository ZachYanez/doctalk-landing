import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="privacy-policy-page"
      style={{ backgroundColor: "#11182A" }}
    >
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
          html, body {
            background-color: #11182A !important;
            color: white !important;
          }
          * {
            background-color: #11182A !important;
            color: white !important;
          }
        `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased privacy-policy-page`}
        style={{
          backgroundColor: "#11182A",
          color: "white",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            backgroundColor: "#11182A",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
