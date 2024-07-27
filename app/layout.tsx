import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://microcms-book-app-grb1.vercel.app"),
  title: {
    template: "%s | シンプルなコーポレートサイト",
    default: "シンプルなコーポレートサイト",
  },
  description: "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で制作されたサイトです",
  openGraph: {
    title: "シンプルなコーポレートサイト",
    description: "「Next.js+ヘッドレスCMSではじめる！かんたん・モダンWebサイト制作入門」で制作されたサイトです",
    images: ["/ogp.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
