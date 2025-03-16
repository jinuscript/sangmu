import type { Metadata } from "next";
import { Provider as JotaiProvider } from "jotai";
import { Footer, Navigation } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "법률사무소 상무",
  description: "법률사무소 상무",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko-KR">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </head>
      <body>
        <JotaiProvider>
          <Navigation />
          {children}
          <Footer />
        </JotaiProvider>
      </body>
    </html>
  );
}
