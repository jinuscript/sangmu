import type { Metadata } from "next";
import { Provider as JotaiProvider } from "jotai";
import { TQProvider } from "@/shared/provider";
import { Footer, Navigation, SideMenu } from "@/components";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "송지현 변호사 | 가사·민사·형사 전문 법률사무소 상무",
  description:
    "광주에서 활동하는 가사·민사·형사 전문 송지현 변호사입니다. 신속하고 믿을 수 있는 법률 상담을 제공합니다.",
  openGraph: {
    title: "송지현 변호사 | 이혼·가사 전문 법률사무소 상무",
    description:
      "가사·민사·형사 전문 변호사 송지현의 상담 예약 및 사건 의뢰 안내.",
    url: "https://www.송지현변호사.kr",
    siteName: "법률사무소 상무",
    type: "website",
  },
  keywords: [
    "이혼 변호사",
    "광주 변호사",
    "가사사건",
    "형사사건",
    "민사사건",
    "법률상담",
    "상속 변호사",
    "친권 분쟁",
  ],
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
        <TQProvider>
          <JotaiProvider>
            <Navigation />
            {children}
            <Footer />
            <SideMenu />
          </JotaiProvider>
        </TQProvider>
      </body>
    </html>
  );
}
