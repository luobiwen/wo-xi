"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { toCanvas } from "html-to-image";

const INITIAL_MARKDOWN = `# 青柠檬

![《青柠檬》封面图](qingningmeng-cover.png)

**QING NING MENG**

**第 01 章**

## 狐仙

**校园青春 · 连载小说**

---

> **本章序言**
>
> 借了狐仙的力量，就要还他一辈子的思念。

![章节氛围图](qingningmeng-divider.png)

### 01

青柠檬，未熟的柠檬，挂在树梢青绿的枝头，像极了娇嫩欲滴的青春期孩子。它的味道辛酸苦涩，那是眼泪的味道，是暗恋的味道。

茶餐厅里面通常用青柠檬配饮料，柠乐、七喜中都会加，清新解腻、增甜增香同时又丰富口感。我也常加入柠檬冰块自己调配饮料，幸好公司就有免费的雪碧，加上各式水果和一大块冰，一口下去清爽痛快。我大呼一口气，然后躺在茶水间的沙发上慢慢卧倒陷下去，仿佛一天工作的疲惫都随着水汽消散。

已经是新入职第三天了，下班后舍友提议去聚餐。到地方我建议吃火锅，两个舍友正并排亲密地聊天，我则紧随其后入座。其中一个胖的舍友，人长得虽胖，吃东西时却兴致缺缺。我与她聊她喜欢的Jay和GD，她直接反问我你凭什么觉得我喜欢他们，我只好作罢不再开启新话题。而对另一个舍友她却喜笑颜开，原因只是因为他们都有出国留学背景，而我在国内读书。才刚认识不到几小时，整个宿舍就瞬间被划分为两个派系。

王熙凤善妒，为了折磨尤二姐暗捧秋桐，扮出软弱受气的模样，让两人狗咬狗，这叫借剑伤人。

“我还让他三分，你去硬碰他，岂不是自寻死路？”

算了，我想只是吃饭而已，随便应付一下顺从他们吧，也就没再说什么。回到宿舍本想睡觉，胖舍友鼾声如雷震得床板响个不停，烦躁的心情让我走马灯般放映人生记忆，那个叶跟我以前初中时的头目姐长得一模一样，也是那样的一个胖子，脸上的横肉拥挤得看不出五官。我记得那时头目姐和社会姐在班级里面站队内斗，问我要支持谁，还记得那一句。

“不要跟他们站队，你要好好学习。”

说这句话的是胡雨，我从初二开始喜欢他，在他的鼓励和帮助下，我从一个堪堪上技校的成绩，一年时间爬升上了年级第一。

民间传言：狐仙有无语伦比的强大力量，能改人运势写人命格。借了力量的凡人，要付出一辈子都偿还不起的代价。借了狐仙的力量，就要还他一辈子的思念。

听说a中初中部有一匹黑马，初二只有400多分年级倒数第一，分数堪堪上职业中学，初三仅用了一年时间就爬升上了年级第一。伴随着让人无法入睡的呼噜声，我迷迷糊糊地回到初一，2016年。

班里的吴x弹了一首钢琴曲，琴声悠扬。爸爸曾经也想让我学钢琴，可是家里没钱买钢琴，平时没办法练习，导致我上钢琴课一直被老师骂。吴x弹得很好，我很羡慕。下了课，我当时的朋友宋x问我是不是喜欢吴x，当时全班没有人为他鼓掌，只有我鼓了掌。我不知道什么是喜欢，吴x钢琴弹得很好，我很欣赏他，我回答我觉得可能吧。

第二天我喜欢吴x的事传遍了全班，吴x手舞足蹈地在班上跑来跑去，好像叫卖报纸的报童一样吆喝。

“徐晴晴喜欢我！太可怕了，大家一定要保护我，千万别让我再和她接触！”

旁边的小贱和他的霸凌小团体高声齐唱，像交响乐不同声部的合唱那样呼应他。

“徐晴晴是个没人要的倒贴女，她喜欢吴x，可是吴x不喜欢他！”

“哈哈，可怜虫！”

班上的流言蜚语很快席卷而来，没人再跟我玩，他们都开始眯着眼镜看我，露出嫉妒嫌弃的神情，好像我是个下等人。

小贱给我起了个难听的外号，叫我“徐日日”，只要一看到我，班里所有人都会用各种难听的脏话骂我。他还觉得不够过瘾，不知从哪里搜到了我的家庭背景，父母都是初中学历，爸爸在家，妈妈创业失败后没有工作，贫穷的家境让我更受歧视。没有人再敢接触我，他们害怕霸王小贱，也相信那些流言，我成为了班上的“不可接触者”。

恶意就像衣服上的褶皱，只需要很小的力气，就能翻起很大的浪花。等你想要抚平时，已经变得不可收拾了。长恨人心不如水，等闲平地起波澜。

两周之后，小贱和他的小团体坐到了我的周围，我的噩梦开始了。他和旁边的人开始像相声表演一样绘声绘色地描述我有多么差劲。

“徐晴晴就是欠日，她是徐日日。”

“徐晴晴喜欢吴x，可是吴x不喜欢他，她是没人要的倒贴女，没有男生愿意喜欢她。”

“那都是因为她太贱了，她长得丑，家境又差，怎么会有男生喜欢她呢？”

“徐晴晴的父母都是初中生，没有工作，她家里可穷了！”

“徐晴晴又黑又瘦，头发短得像男孩，她太丑了！”

我从不理睬小贱，我恨小贱，都是因为他，大家才不跟我玩，大家才开始欺负我。我让旁边的男生拉窗帘，小贱和他的同伴捂着脸尖叫。

“徐晴晴又有新老公了！”小贱又转过头对着那个男生说，“你可千万不要答应她，徐晴晴和她的老公都一样贱！”

我听老师讲课，他们把我的眼睛挡住。

老师和周围的同学都不喜欢我，我在学校没有朋友，我最开心的时光，就是每周五回家打CF。

我枪法很准，在运输船一枪一个，没有人是我的对手。那些玩家的人形图块，在我眼里都移动得很慢，我蹲在一个铁桶后面或是一个铁箱里面，狙击枪准星盯着每一个玩家的头部。CF的所有模式我都很喜欢玩，生化模式、拆C4炸弹，还有新出的躲猫猫。但我最喜欢玩的，还是大家组队打Boss的模式。

类似求生之路，CF里面也有四个人组队打Boss的模式。队友们都对我很好，他们给我讲规则，在我受伤的时候把我救起来，我打得不好他们也不会嫌弃我，只会让我和他们并肩作战。

妈妈每天工作到很晚才回来，爷爷住院了，爸爸去照顾爷爷，家里只有我，我渐渐迷上了游戏。

在班级里，我是人人嫌弃的“不可接触者”，只有在游戏里，大家不知道我的身份，我才可以隔着电脑屏幕，安全地和大家相处、交朋友。

可游戏不会让现实停止，游戏没法让那些人消失。

### 下章预告

**眼镜**

矛盾继续升级，小贱打断了徐晴晴的眼镜。

🍋‍🟩

**未完待续**

如果你是故事里的徐晴晴，你会怎么做？

欢迎在留言区告诉我。

---

> **《青柠檬》**
>
> 以及那些没有说出口的喜欢的青春校园小说。`;

const imageMap: Record<string, string> = {
  "qingningmeng-cover.png": "/qingningmeng-cover-anime.png",
  "qingningmeng-divider.png": "/qingningmeng-divider.png",
  "qingningmeng-background.png": "/qingningmeng-background-seamless.png",
};

function inlineParts(text: string) {
  return text.split(/(\*\*.*?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={index} style={{ color: "#355746", fontWeight: 650 }}>{part.slice(2, -2)}</strong>
    ) : <React.Fragment key={index}>{part}</React.Fragment>,
  );
}

function ArticlePreview({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/<\/?div[^>]*>/g, "").split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { i += 1; continue; }
    const image = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (image) {
      const src = imageMap[image[2]] || image[2];
      const isCover = image[2].includes("cover");
      nodes.push(<img key={`img-${i}`} src={src} alt={image[1]} style={{ display: "block", width: "100%", height: "auto", margin: isCover ? "0 0 34px" : "34px 0", borderRadius: isCover ? "0" : "4px" }} />);
      i += 1; continue;
    }
    if (line === "---") {
      nodes.push(<div key={`hr-${i}`} style={{ textAlign: "center", margin: "34px 0", color: "#9caf78", letterSpacing: "8px" }}>· · 🍋‍🟩 · ·</div>);
      i += 1; continue;
    }
    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith(">") || !lines[i].trim())) {
        if (lines[i].trim().startsWith(">")) quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      nodes.push(
        <section key={`quote-${i}`} style={{ margin: "28px 0", padding: "34px 30px", textAlign: "center", color: "#526358", lineHeight: 2, backgroundColor: "rgba(255,255,255,.52)", borderTop: "1px solid rgba(164,185,126,.45)", borderBottom: "1px solid rgba(164,185,126,.45)" }}>
          {quote.filter(Boolean).map((q, n) => <div key={n}>{inlineParts(q)}</div>)}
        </section>,
      );
      continue;
    }
    if (line.startsWith("# ")) {
      nodes.push(<h1 key={`h1-${i}`} style={{ margin: "12px 0 8px", textAlign: "center", fontFamily: "'Noto Serif SC','Songti SC',SimSun,serif", fontSize: "34px", letterSpacing: "9px", color: "#315a45", fontWeight: 700 }}>{line.slice(2)}</h1>);
      i += 1; continue;
    }
    if (line.startsWith("## ")) {
      nodes.push(<h2 key={`h2-${i}`} style={{ margin: "34px 0 22px", textAlign: "center", fontFamily: "'Noto Serif SC','Songti SC',SimSun,serif", fontSize: "25px", letterSpacing: "5px", color: "#355746", fontWeight: 650 }}>{line.slice(3)}</h2>);
      i += 1; continue;
    }
    if (line.startsWith("### ")) {
      nodes.push(<div key={`h3-${i}`} style={{ margin: "40px 0 22px", display: "flex", alignItems: "center", gap: "12px", color: "#4f6e58" }}><span style={{ height: "1px", flex: 1, background: "#d9e2ca" }} /><span style={{ fontFamily: "Georgia,serif", fontSize: "18px", letterSpacing: "3px", fontWeight: 600 }}>{line.slice(4)}</span><span style={{ height: "1px", flex: 1, background: "#d9e2ca" }} /></div>);
      i += 1; continue;
    }
    nodes.push(<p key={`p-${i}`} style={{ margin: "0 0 21px", textAlign: "justify", lineHeight: 2.05, letterSpacing: "0.7px", color: "#323a35", fontSize: "17px" }}>{inlineParts(line)}</p>);
    i += 1;
  }
  return <>{nodes}</>;
}

const tools = [
  { label: "章节标题", insert: "\n\n## 新章节\n\n" },
  { label: "小节编号", insert: "\n\n### 02\n\n" },
  { label: "青柠引用", insert: "\n\n> **青柠日记**\n>\n> 在这里写下没有说出口的话。\n\n" },
  { label: "章节配图", insert: "\n\n![章节氛围图](qingningmeng-divider.png)\n\n" },
  { label: "背景卡片", insert: "\n\n> **本章序言**\n>\n> 在这里写本章引言。\n\n" },
  { label: "青柠分隔", insert: "\n\n---\n\n" },
];

export default function MiniXiumi() {
  const [markdown, setMarkdown] = useState(INITIAL_MARKDOWN);
  const [copyState, setCopyState] = useState("复制可编辑版");
  const [imageCopyState, setImageCopyState] = useState("复制图片版（保背景）");
  const [storageReady, setStorageReady] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLElement>(null);
  const characters = useMemo(() => markdown.replace(/\s/g, "").length, [markdown]);

  useEffect(() => {
    const saved = localStorage.getItem("qingningmeng-markdown");
    if (saved) setMarkdown(saved.replace(/🍋(?!‍🟩)/gu, "🍋‍🟩"));
    setStorageReady(true);
  }, []);
  useEffect(() => {
    if (storageReady) localStorage.setItem("qingningmeng-markdown", markdown);
  }, [markdown, storageReady]);

  function insertSnippet(snippet: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    setMarkdown(markdown.slice(0, start) + snippet + markdown.slice(end));
    requestAnimationFrame(() => { textarea.focus(); textarea.selectionStart = textarea.selectionEnd = start + snippet.length; });
  }

  async function copyRichText() {
    const preview = previewRef.current;
    if (!preview) return;
    const clone = preview.cloneNode(true) as HTMLElement;
    const embeddedAssets = new Map<string, string>();
    async function embed(url: string) {
      if (embeddedAssets.has(url)) return embeddedAssets.get(url)!;
      const blob = await fetch(url).then((response) => response.blob());
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      embeddedAssets.set(url, dataUrl);
      return dataUrl;
    }

    // The editable version intentionally omits the page background. WeChat
    // removes background and positioning styles during publication, which can
    // otherwise move decorative images above the article.
    clone.style.backgroundImage = "none";

    await Promise.all(Array.from(clone.querySelectorAll("img")).map(async (img) => {
      const src = img.getAttribute("src");
      if (src && !src.startsWith("data:")) img.setAttribute("src", await embed(new URL(src, window.location.href).href));
    }));
    const html = clone.outerHTML;
    const plain = preview.innerText;
    try {
      if (navigator.clipboard && "ClipboardItem" in window) {
        await navigator.clipboard.write([new ClipboardItem({ "text/html": new Blob([html], { type: "text/html" }), "text/plain": new Blob([plain], { type: "text/plain" }) })]);
      } else {
        const range = document.createRange(); range.selectNodeContents(preview);
        const selection = window.getSelection(); selection?.removeAllRanges(); selection?.addRange(range);
        document.execCommand("copy"); selection?.removeAllRanges();
      }
      setCopyState("已复制，去公众号粘贴");
      window.setTimeout(() => setCopyState("复制可编辑版"), 2500);
    } catch { setCopyState("请允许剪贴板权限"); }
  }

  async function copyImageLayout() {
    const preview = previewRef.current;
    if (!preview) return;
    setImageCopyState("正在生成图片…");
    try {
      await document.fonts?.ready;
      const canvas = await toCanvas(preview, {
        backgroundColor: "#fffdf5",
        cacheBust: true,
        pixelRatio: 2,
      });
      const sliceHeight = 2400;
      const images: string[] = [];
      for (let top = 0; top < canvas.height; top += sliceHeight) {
        const height = Math.min(sliceHeight, canvas.height - top);
        const slice = document.createElement("canvas");
        slice.width = canvas.width;
        slice.height = height;
        const context = slice.getContext("2d");
        if (!context) throw new Error("无法创建图片画布");
        context.drawImage(canvas, 0, top, canvas.width, height, 0, 0, canvas.width, height);
        images.push(slice.toDataURL("image/jpeg", 0.98));
      }
      const html = `<section style="margin:0;padding:0;line-height:0;">${images.map((src) => `<img src="${src}" alt="" style="display:block;width:100%;height:auto;margin:0;padding:0;border:0;vertical-align:top;" />`).join("")}</section>`;
      const plain = preview.innerText;
      if (navigator.clipboard && "ClipboardItem" in window) {
        await navigator.clipboard.write([new ClipboardItem({
          "text/html": new Blob([html], { type: "text/html" }),
          "text/plain": new Blob([plain], { type: "text/plain" }),
        })]);
      } else {
        const holder = document.createElement("div");
        holder.contentEditable = "true";
        holder.style.position = "fixed";
        holder.style.left = "-100000px";
        holder.innerHTML = html;
        document.body.appendChild(holder);
        const range = document.createRange();
        range.selectNodeContents(holder);
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(range);
        document.execCommand("copy");
        selection?.removeAllRanges();
        holder.remove();
      }
      setImageCopyState("已复制，背景不会跑位");
      window.setTimeout(() => setImageCopyState("复制图片版（保背景）"), 3000);
    } catch {
      setImageCopyState("生成失败，请重试");
      window.setTimeout(() => setImageCopyState("复制图片版（保背景）"), 3000);
    }
  }

  function downloadMarkdown() {
    const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = "青柠檬-排版稿.md"; anchor.click(); URL.revokeObjectURL(url);
  }

  return (
    <main className="studio-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-fruit">青柠</span><div><strong>青柠排版间</strong><small>《青柠檬》专属迷你秀米</small></div></div>
        <div className="top-actions"><span>{characters.toLocaleString()} 字</span><button className="ghost-button" onClick={downloadMarkdown}>导出 Markdown</button><button className="ghost-button" onClick={copyRichText}>{copyState}</button><button className="primary-button" onClick={copyImageLayout}>{imageCopyState}</button></div>
      </header>
      <div className="workspace">
        <aside className="toolbox">
          <div className="toolbox-title">常用组件</div><p>点击后插入到光标位置</p>
          <div className="tool-grid">{tools.map((tool) => <button key={tool.label} onClick={() => insertSnippet(tool.insert)}>{tool.label}</button>)}</div>
          <div className="palette-card"><strong>青柠色板</strong><div className="swatches"><i /><i /><i /><i /></div><small>墨绿 · 青柠 · 奶油白 · 雾蓝</small></div>
          <div className="tip-card">内容会自动保存在当前浏览器。需要完整背景时请使用“复制图片版”；需要继续编辑文字时使用“复制可编辑版”。</div>
        </aside>
        <section className="editor-pane">
          <div className="pane-heading"><strong>Markdown 正文</strong><span>实时保存</span></div>
          <textarea ref={textareaRef} value={markdown} onChange={(event) => setMarkdown(event.target.value)} spellCheck={false} aria-label="Markdown 正文编辑器" />
        </section>
        <section className="preview-pane">
          <div className="pane-heading"><strong>公众号预览</strong><span>390 px</span></div>
          <div className="phone-stage">
            <section ref={previewRef} className="wechat-article" style={{ maxWidth: "677px", margin: "0 auto", padding: "0 20px 64px", backgroundColor: "#fffdf5", backgroundImage: "url('/qingningmeng-background-seamless.png')", backgroundRepeat: "repeat-y", backgroundPosition: "top center", backgroundSize: "100% auto", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif" }}><ArticlePreview markdown={markdown} /></section>
          </div>
        </section>
      </div>
    </main>
  );
}
