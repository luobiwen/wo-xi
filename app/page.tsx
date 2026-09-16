import type { Metadata } from "next";
import MiniXiumi from "./mini-xiumi";

export const metadata: Metadata = {
  title: "青柠排版间｜迷你秀米",
  description: "为《青柠檬》定制的公众号文章排版与富文本复制工具",
};

export default function Home() {
  return <MiniXiumi />;
}
