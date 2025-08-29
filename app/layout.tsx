import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Lập Trình Viên Full Stack",
  description: "Portfolio cá nhân giới thiệu các dự án và kỹ năng của tôi với vai trò Lập Trình Viên Full Stack",
  keywords: "portfolio, web developer, full stack, react, next.js, typescript, lập trình viên",
  authors: [{ name: "Đình Viễn" }],
  openGraph: {
    title: "Portfolio | Lập Trình Viên Full Stack",
    description: "Portfolio cá nhân giới thiệu các dự án và kỹ năng của tôi",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
