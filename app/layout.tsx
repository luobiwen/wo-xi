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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Liu+Jian+Mao+Cao&family=Zhi+Mang+Xing&family=Ma+Shan+Zheng&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
