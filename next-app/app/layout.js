import "./globals.css";
import Header from "../src/components/layout/Header/Header.jsx";
import Footer from "../src/components/layout/Footer/Footer.jsx";
import FloatingButtons from "../src/components/molecules/FloatingButtons/FloatingButtons.jsx";
import ScrollToTop from "../src/components/layout/ScrollToTop/ScrollToTop.jsx";
import styles from "../src/components/layout/Layout/Layout.module.css";

export const metadata = {
  title: {
    default: "프렌즈프리미엄 신불당점",
    template: "%s | 프렌즈프리미엄 신불당점"
  },
  description: "프렌즈 프리미엄 골프연습장 신불당점 - 천안 신불당 프리미엄 골프 연습장",
  keywords: ["골프연습장", "골프레슨", "천안골프", "신불당", "프렌즈프리미엄"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://friends-golf.com",
    siteName: "프렌즈프리미엄 신불당점",
    title: "프렌즈프리미엄 신불당점",
    description: "프렌즈 프리미엄 골프연습장 신불당점 - 천안 신불당 프리미엄 골프 연습장",
  },
  twitter: {
    card: "summary_large_image",
    title: "프렌즈프리미엄 신불당점",
    description: "프렌즈 프리미엄 골프연습장 신불당점",
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
        <ScrollToTop />
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
          <Footer />
          <FloatingButtons />
        </div>
      </body>
    </html>
  );
}
