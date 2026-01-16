import "./globals.css";
import Header from "../src/components/layout/Header/Header.jsx";
import Footer from "../src/components/layout/Footer/Footer.jsx";
import FloatingButtons from "../src/components/molecules/FloatingButtons/FloatingButtons.jsx";
import styles from "../src/components/layout/Layout/Layout.module.css";

export const metadata = {
  title: "프렌즈프리미엄 신불당점",
  description: "프렌즈 프리미엄 골프연습장 신불당점",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
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
