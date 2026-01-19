import "./globals.css";
import { KakaoMapProvider } from "../src/contexts/KakaoMapContext.jsx";
import Header from "../src/components/layout/Header/Header.jsx";
import Footer from "../src/components/layout/Footer/Footer.jsx";
import FloatingButtons from "../src/components/molecules/FloatingButtons/FloatingButtons.jsx";
import ScrollToTop from "../src/components/layout/ScrollToTop/ScrollToTop.jsx";
import styles from "../src/components/layout/Layout/Layout.module.css";

export const metadata = {
  title: {
    default: "천안 신불당 골프연습장 | 프렌즈 프리미엄 골프연습장 신불당점",
    template: "%s | 프렌즈 프리미엄 골프연습장 신불당점"
  },
  description: "천안 신불당에 위치한 프렌즈 프리미엄 골프연습장으로, 골프연습·레슨이 가능한 스크린골프 시설입니다.",
  keywords: [
    "천안 골프연습장",
    "신불당 골프연습장",
    "신불당 스크린골프",
    "프렌즈 프리미엄 골프연습장 신불당점",
    "천안 골프레슨",
    "신불당 골프",
    "프렌즈프리미엄",
  ],
  verification: {
    google: 'qmths5JAmxBIA_fHk5Nza_qO7DCt5qAvYXkDox6kDrM',
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://friends-golf.com",
    siteName: "프렌즈 프리미엄 골프연습장 신불당점",
    title: "천안 신불당 골프연습장 | 프렌즈 프리미엄 골프연습장 신불당점",
    description: "천안 신불당에 위치한 프렌즈 프리미엄 골프연습장으로, 골프연습·레슨이 가능한 스크린골프 시설입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "천안 신불당 골프연습장 | 프렌즈 프리미엄 골프연습장 신불당점",
    description: "천안 신불당에 위치한 프렌즈 프리미엄 골프연습장으로, 골프연습·레슨이 가능한 스크린골프 시설입니다.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <KakaoMapProvider>
          <ScrollToTop />
          <div className={styles.layout}>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
            <Footer />
            <FloatingButtons />
          </div>
        </KakaoMapProvider>
      </body>
    </html>
  );
}
