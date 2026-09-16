import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "青柠排版间｜迷你秀米",
  description: "为《青柠檬》定制的公众号文章排版与富文本复制工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
