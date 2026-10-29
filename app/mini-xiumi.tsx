"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

const WECHAT_BACKGROUND = "https://mmbiz.qpic.cn/sz_mmbiz_png/GRp01Ua2EeMCCv2Svg4mT5WK14fZ3Otk6y9QyGqhAjvzkCPElhvfG0NMI8yvJz5EctVk95YBQN6VOhNp9JDzZgIzBos6xicoonc5CD5zbHJ4/0?wx_fmt=png";
const WECHAT_COMPOSITION_BACKGROUND = "https://mmbiz.qpic.cn/sz_mmbiz_png/GRp01Ua2EeNNa6tsL2wHIHwyxUorVUlBwccDPtfibYwNfCs7qWI9vUPPyrvamht2JMFSq1bia3Jxmf5hm8ibVicazxKiaibiasmou20gStDAfnmFgQ/0?wx_fmt=png";

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

![章节氛围图](/divider4.jpg)

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

const READING_GUIDE_MARKDOWN = `# 青柠檬

**READING NOTICE · 阅读须知**

在翻开这颗青柠之前，请先读完这份阅读指南。

## 小说简介

《青柠檬》是一部长篇青春校园小说。故事从一场倾盆大雨开始，写少年少女在流言、偏见、友谊与朦胧情愫之间跌跌撞撞地长大。

青柠尚未成熟时，入口总是微酸；可也正是这份青涩，构成了青春最难忘的味道。

## 高分作文一览

### 《青柠的味道》

青春像一颗还没有成熟的青柠，外表青涩，味道微酸，却藏着独属于夏天的清香。那些曾经让我们落泪的瞬间，也会在很多年后，成为记忆里最明亮的一束光。

成长不是催促青柠提前变甜，而是允许它带着酸涩慢慢成熟。每一道旧伤都会结成纹路，提醒我们曾经怎样认真地生活过。

### 《雨落下的时候》

雨点落在窗台上，一声接着一声，像有人把没有说出口的话，轻轻敲给夜晚听。我忽然明白，有些成长并不是学会遗忘，而是终于敢回头看那段来路。

雨停以后，操场上积着一层浅浅的水，倒映着被洗亮的天空。我踩过水面，也踩过昨日的胆怯，第一次觉得前方没有想象中那么遥远。

### 《写给未成熟的自己》

如果可以回到过去，我不会催促那个笨拙又敏感的自己快点长大。我会告诉她：慢一点也没有关系，青柠总有成熟的一天，而你也会拥有属于自己的清香。

后来我才明白，真正的成熟不是变得坚硬，而是在看清生活的锋利之后，依然愿意相信温柔、相信自己，也相信明天会有新的光。

## 小说类型

**题材**：青春校园 · 成长治愈 · 情感长篇

**篇幅**：预计 30 万字左右

**章节**：预计 120 章

**状态**：持续连载中

**更新频率**：每周更新 2—3 篇，特殊情况会提前说明

## 付费标准

**免费试读**：前 10 章免费阅读

**付费章节**：第 11 章起进入付费阅读，每章价格请以公众号页面显示为准

**阅读说明**：付费后可永久阅读对应章节；已经购买的章节无需重复付费

**温馨提醒**：请在购买前确认章节标题，数字内容一经解锁，通常不支持退款

## 小说合集入口

### 免费合集

[免费合集第一章](https://mp.weixin.qq.com/s/REPLACE_FREE_FIRST_CHAPTER)

[免费合集链接](https://mp.weixin.qq.com/mp/appmsgalbum?album_id=REPLACE_FREE_ALBUM_ID)

### 付费合集

[付费合集第一章](https://mp.weixin.qq.com/s/REPLACE_PAID_FIRST_CHAPTER)

[付费合集链接](https://mp.weixin.qq.com/mp/appmsgalbum?album_id=REPLACE_PAID_ALBUM_ID)

## 作者简介

**作者**：请在这里填写作者笔名

一个喜欢记录青春、情绪与人心褶皱的写作者。相信成长并不是忘记疼痛，而是在回望时，终于能温柔地拥抱当年的自己。

**联系与合作**：请填写公众号名称或联系邮箱

---

愿你在《青柠檬》里，看见青春，也看见自己。 🍋‍🟩`;

const imageMap: Record<string, string> = {
  "qingningmeng-cover.png": "/qingningmeng-cover-anime.png",
  "qingningmeng-divider.png": "/divider4.jpg",
  "qingningmeng-background.png": "/qingningmeng-background-seamless.png",
  "胡雨人设卡.png": "/huyu-character-card.png",
  "徐晴晴人设卡.png": "/xuqingqing-character-card.png",
};

function resolveImageSource(source: string) {
  const normalizedImagePath = source.replace(/^\/+/, "");
  const imageFileName = normalizedImagePath.split(/[\\/]/).pop() || normalizedImagePath;
  return imageMap[source] || imageMap[normalizedImagePath] || imageMap[imageFileName] || source;
}

const DEFAULT_COMPOSITION = `# 我心中的青柠

青春像一颗还没有成熟的青柠，外表青涩，味道微酸，却藏着独属于夏天的清香。

在这里继续补充作文正文。每个自然段之间留一个空行，右侧会自动排到作文纸上。

那些曾经以为无法跨过的难题，后来都变成了成长留下的纹路。`;

type CompositionEntry = {
  id: string;
  content: string;
  author: string;
  showAuthor: boolean;
};

type ChatMessage = {
  id: string;
  name: string;
  content: string;
  isMine: boolean;
};

type ChatRecord = {
  id: string;
  messages: ChatMessage[];
};

const DEFAULT_COMPOSITIONS: CompositionEntry[] = [{
  id: "composition-1",
  content: DEFAULT_COMPOSITION,
  author: "请填写作者名",
  showAuthor: true,
}];

const DEFAULT_CHAT_RECORDS: ChatRecord[] = [{
  id: "chat-1",
  messages: [
    { id: "message-1", name: "胡雨", content: "不要跟他们站队，你要好好学习。", isMine: false },
    { id: "message-2", name: "徐晴晴", content: "可是如果所有人都不理我呢？", isMine: false },
    { id: "message-3", name: "胡雨", content: "那也不要为了合群变成自己不喜欢的样子。", isMine: false },
    { id: "message-4", name: "徐晴晴", content: "好，我记住了。", isMine: false },
  ],
}];

const DEFAULT_TEACHER_COMMENT = "感情真挚，描写细腻。继续加油！";

const AUTHOR_SIGNATURES: Record<string, string> = {
  "胡雨": "/signature-huyu.png",
  "徐晴晴": "/signature-xuqq.png",
  "小秋": "/signature-xiaoqiu.png",
  "小哲": "/signature-xiaozhe.png",
};

function inlineParts(text: string) {
  return text.split(/(\*\*.*?\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index} style={{ color: "#355746", fontWeight: 650 }}>{part.slice(2, -2)}</strong>;
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      return <a key={index} href={link[2]} style={{ color: "#315f47", textDecoration: "none", borderBottom: "1px solid #afc58c" }}>{link[1]}</a>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}

function ReadingGuidePreview({ markdown }: { markdown: string }) {
  const lines = markdown.replace(/<\/?div[^>]*>/g, "").split(/\r?\n/);
  const title = lines.find((line) => line.trim().startsWith("# "))?.trim().slice(2) || "青柠檬";
  const firstSectionIndex = lines.findIndex((line) => line.trim().startsWith("## "));
  const intro = lines.slice(0, firstSectionIndex < 0 ? lines.length : firstSectionIndex)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("# "));
  const sections: Array<{ title: string; lines: string[] }> = [];
  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (line.startsWith("## ")) sections.push({ title: line.slice(3), lines: [] });
    else if (sections.length) sections[sections.length - 1].lines.push(line);
  });

  return (
    <>
      <section style={{ padding: "44px 28px 36px", textAlign: "center", background: "rgba(255,255,255,.68)", border: "1px solid rgba(147,171,111,.34)", borderRadius: "4px" }}>
        <div style={{ marginBottom: "12px", fontSize: "23px" }}>🍋‍🟩</div>
        <div style={{ color: "#869b70", fontFamily: "Georgia,serif", fontSize: "11px", letterSpacing: "5px" }}>READING NOTICE</div>
        <h1 style={{ margin: "12px 0 8px", color: "#315a45", fontFamily: "'Noto Serif SC','Songti SC',SimSun,serif", fontSize: "36px", fontWeight: 700, letterSpacing: "10px" }}>{title}</h1>
        <div style={{ margin: "0 auto 22px", width: "42px", height: "2px", background: "#b6cf76" }} />
        {intro.map((line, index) => {
          const image = line.match(/^!\[(.*?)\]\((.*?)\)$/);
          if (image) {
            const isCharacterCard = image[1].includes("人设卡") || image[2].includes("character-card");
            return <img key={index} src={resolveImageSource(image[2])} alt={image[1]} style={{ display: "block", width: isCharacterCard ? "min(100%, 420px)" : "100%", height: "auto", margin: "22px auto", borderRadius: "8px" }} />;
          }
          return <p key={index} style={{ margin: index ? "10px 0 0" : "0", color: index === 0 ? "#5f775f" : "#526358", fontSize: index === 0 ? "13px" : "16px", lineHeight: 1.9, letterSpacing: index === 0 ? "2px" : ".5px" }}>{inlineParts(line)}</p>;
        })}
      </section>

      {sections.map((section, sectionIndex) => (
        <section key={section.title} style={{ margin: "28px 0", padding: "28px 24px 22px", background: "rgba(255,255,255,.76)", borderLeft: "4px solid #a8c56a", boxShadow: "0 7px 20px rgba(64,88,67,.07)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
            <span style={{ display: "inline-flex", width: "34px", height: "34px", alignItems: "center", justifyContent: "center", borderRadius: "50%", color: "#fff", background: "#66836a", fontFamily: "Georgia,serif", fontSize: "12px" }}>{String(sectionIndex + 1).padStart(2, "0")}</span>
            <h2 style={{ margin: 0, color: "#315a45", fontFamily: "'Noto Serif SC','Songti SC',SimSun,serif", fontSize: "23px", letterSpacing: "4px" }}>{section.title}</h2>
          </div>
          {section.lines.map((line, lineIndex) => {
            if (!line) return null;
            if (line === "---") return <div key={lineIndex} style={{ margin: "26px 0", textAlign: "center", color: "#9caf78", letterSpacing: "8px" }}>· · 🍋‍🟩 · ·</div>;
            if (line.startsWith("### ")) return <h3 key={lineIndex} style={{ margin: "24px 0 12px", color: "#6b8069", fontSize: "16px", letterSpacing: "2px", fontWeight: 700 }}>{line.slice(4)}</h3>;
            const image = line.match(/^!\[(.*?)\]\((.*?)\)$/);
            if (image) {
              const isCharacterCard = image[1].includes("人设卡") || image[2].includes("character-card");
              return <img key={lineIndex} src={resolveImageSource(image[2])} alt={image[1]} style={{ display: "block", width: isCharacterCard ? "min(100%, 420px)" : "100%", height: "auto", margin: "22px auto", borderRadius: "8px", boxShadow: isCharacterCard ? "0 10px 26px rgba(55,79,61,.12)" : "none" }} />;
            }
            const isDirectoryLink = /^\[[^\]]+\]\([^)]+\)$/.test(line);
            if (isDirectoryLink) {
              return <p key={lineIndex} style={{ margin: "0 0 10px", padding: "13px 15px", background: "rgba(239,244,229,.84)", borderRadius: "4px", color: "#315f47", fontSize: "16px", lineHeight: 1.6 }}>{inlineParts(line)}<span style={{ float: "right", color: "#91aa70" }}>›</span></p>;
            }
            const isPreviewExcerpt = section.title === "高分作文一览";
            return <p key={lineIndex} style={{ margin: "0 0 16px", padding: isPreviewExcerpt ? "18px 20px" : "0", color: "#35483d", background: isPreviewExcerpt ? "rgba(156,190,105,.14)" : "transparent", border: isPreviewExcerpt ? "1px solid rgba(143,174,94,.32)" : "0", borderLeft: isPreviewExcerpt ? "3px solid rgba(112,148,72,.72)" : "0", borderRadius: isPreviewExcerpt ? "4px" : "0", boxShadow: "none", fontSize: "17px", lineHeight: 1.95, textAlign: "justify", letterSpacing: ".4px" }}>{inlineParts(line)}</p>;
          })}
        </section>
      ))}
    </>
  );
}

function ChatRecordPreview({ record }: { record: ChatRecord }) {
  return (
    <section data-chat-record="true" style={{ margin: "30px 0", padding: "18px", backgroundColor: "rgba(247,250,241,.94)", border: "1px solid rgba(143,171,101,.48)", borderRadius: "12px", boxShadow: "0 8px 22px rgba(63,87,61,.08)", color: "#31483c" }}>
      {record.messages.map((message, index) => {
        const name = message.name.trim() || "未命名";
        const lines = message.content.split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
        const alignRight = message.isMine;
        return (
            <div key={message.id} data-chat-message="true" style={{ width: "86%", margin: index ? (alignRight ? "16px 0 0 auto" : "16px auto 0 0") : (alignRight ? "0 0 0 auto" : "0 auto 0 0"), textAlign: alignRight ? "right" : "left" }}>
              <div style={{ margin: "0 2px 6px", color: "#617160", fontSize: "12px", lineHeight: 1.4 }}>
                {alignRight ? (
                  <><strong style={{ display: "inline-block", verticalAlign: "middle", fontWeight: 650 }}>{name}</strong><span style={{ display: "inline-flex", width: "25px", height: "25px", marginLeft: "7px", alignItems: "center", justifyContent: "center", verticalAlign: "middle", borderRadius: "50%", backgroundColor: "#dbe8bd", color: "#31533f", fontSize: "12px", fontWeight: 700 }}>{name.slice(0, 1)}</span></>
                ) : (
                  <><span style={{ display: "inline-flex", width: "25px", height: "25px", marginRight: "7px", alignItems: "center", justifyContent: "center", verticalAlign: "middle", borderRadius: "50%", backgroundColor: "#b9d478", color: "#31533f", fontSize: "12px", fontWeight: 700 }}>{name.slice(0, 1)}</span><strong style={{ display: "inline-block", verticalAlign: "middle", fontWeight: 650 }}>{name}</strong></>
                )}
              </div>
              <div style={{ display: "inline-block", maxWidth: "100%", padding: "12px 15px", backgroundColor: alignRight ? "rgba(224,238,195,.94)" : "rgba(255,255,255,.96)", border: "1px solid rgba(179,198,148,.48)", borderRadius: alignRight ? "13px 4px 13px 13px" : "4px 13px 13px 13px", textAlign: "left" }}>
                {(lines.length ? lines : ["请填写聊天内容"]).map((line, lineIndex) => (
                  <p key={lineIndex} style={{ margin: lineIndex ? "7px 0 0" : "0", color: "#304238", fontSize: "16px", lineHeight: 1.75, letterSpacing: ".4px" }}>{line}</p>
                ))}
              </div>
            </div>
        );
      })}
    </section>
  );
}

function ArticlePreview({ markdown, compositions, chatRecords, teacherComment, showTeacherComment }: { markdown: string; compositions?: CompositionEntry[]; chatRecords?: ChatRecord[]; teacherComment?: string; showTeacherComment?: boolean }) {
  const lines = markdown.replace(/<\/?div[^>]*>/g, "").split(/\r?\n/);
  const nodes: React.ReactNode[] = [];
  let bodyCardNodes: React.ReactNode[] | null = null;
  let bodyCardIndex = 0;
  const pushNode = (node: React.ReactNode) => {
    if (bodyCardNodes) bodyCardNodes.push(node);
    else nodes.push(node);
  };
  const flushBodyCard = () => {
    if (!bodyCardNodes) return;
    nodes.push(
      <section key={`body-card-${bodyCardIndex}`} style={{ margin: "34px 0", padding: "22px 22px 8px", backgroundColor: "rgba(255,255,255,.72)" }}>
        {bodyCardNodes}
      </section>,
    );
    bodyCardIndex += 1;
    bodyCardNodes = null;
  };
  let i = 0;
  let compositionInserted = false;
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) {
      pushNode(<p key={`blank-${i}`} data-blank-line="true" style={{ margin: 0, height: "36px", lineHeight: "36px", fontSize: "18px" }}>{"\u00a0"}</p>);
      i += 1;
      continue;
    }
    const chatMarker = line.match(/^\[\[聊天记录:([^\]]+)\]\]$/);
    if (chatMarker) {
      const record = chatRecords?.find((entry) => entry.id === chatMarker[1]);
      if (record) pushNode(<ChatRecordPreview key={`chat-${record.id}-${i}`} record={record} />);
      i += 1; continue;
    }
    const image = line.match(/^!\[(.*?)\]\((.*?)\)$/);
    if (image) {
      const src = resolveImageSource(image[2]);
      const isCover = image[2].includes("cover");
      const coverFade = "linear-gradient(to bottom, transparent 0%, #000 4%, #000 80%, transparent 100%)";
      pushNode(<img key={`img-${i}`} src={src} alt={image[1]} data-cover-fade={isCover ? "true" : undefined} style={{ display: "block", width: "100%", height: "auto", margin: isCover ? "0 0 16px" : "34px 0", borderRadius: isCover ? "8px 8px 0 0" : "4px", ...(isCover ? { maskImage: coverFade, WebkitMaskImage: coverFade } : {}) }} />);
      i += 1; continue;
    }
    if (line === "---") {
      pushNode(<div key={`hr-${i}`} style={{ textAlign: "center", margin: "34px 0", color: "#9caf78", letterSpacing: "8px" }}>· · 🍋‍🟩 · ·</div>);
      i += 1; continue;
    }
    if (line.startsWith(">")) {
      const quote: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith(">") || !lines[i].trim())) {
        if (lines[i].trim().startsWith(">")) quote.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      pushNode(
        <section key={`quote-${i}`} style={{ margin: "28px 0", padding: "34px 30px", textAlign: "center", color: "#526358", lineHeight: 2, backgroundColor: "rgba(255,255,255,.52)", borderTop: "1px solid rgba(164,185,126,.45)", borderBottom: "1px solid rgba(164,185,126,.45)" }}>
          {quote.filter(Boolean).map((q, n) => <div key={n}>{inlineParts(q)}</div>)}
        </section>,
      );
      continue;
    }
    if (line.startsWith("# ")) {
      flushBodyCard();
      nodes.push(<h1 key={`h1-${i}`} style={{ margin: "12px 0 8px", textAlign: "center", fontFamily: "'Noto Serif SC','Songti SC',SimSun,serif", fontSize: "34px", letterSpacing: "9px", color: "#315a45", fontWeight: 700 }}>{line.slice(2)}</h1>);
      i += 1; continue;
    }
    if (line.startsWith("## ")) {
      flushBodyCard();
      nodes.push(<h2 key={`h2-${i}`} style={{ margin: "34px 0 22px", textAlign: "center", fontFamily: "'Noto Serif SC','Songti SC',SimSun,serif", fontSize: "25px", letterSpacing: "5px", color: "#355746", fontWeight: 650 }}>{line.slice(3)}</h2>);
      i += 1; continue;
    }
    if (line.startsWith("### ")) {
      const heading = line.slice(4);
      flushBodyCard();
      if (heading === "下章预告" && compositions?.length && !compositionInserted) {
        compositions.forEach((entry) => nodes.push(<CompositionPreview key={entry.id} content={entry.content} author={entry.author} showAuthor={entry.showAuthor} teacherComment={teacherComment} showTeacherComment={showTeacherComment} />));
        compositionInserted = true;
      }
      const headingNode = <div key={`h3-${i}`} style={{ margin: /^\d+$/.test(heading) ? "2px 0 24px" : "40px 0 22px", display: "flex", alignItems: "center", gap: "12px", color: "#4f6e58" }}><span style={{ height: "1px", flex: 1, background: "#d9e2ca" }} /><span style={{ fontFamily: "Georgia,serif", fontSize: "18px", letterSpacing: "3px", fontWeight: 600 }}>{heading}</span><span style={{ height: "1px", flex: 1, background: "#d9e2ca" }} /></div>;
      if (/^\d+$/.test(heading)) {
        bodyCardNodes = [headingNode];
      } else {
        nodes.push(headingNode);
      }
      i += 1; continue;
    }
    const isStandaloneBold = /^\*\*.*\*\*$/.test(line);
    pushNode(<p key={`p-${i}`} style={{ margin: "0 0 22px", textAlign: "justify", textIndent: isStandaloneBold ? "0" : "2em", lineHeight: 2, letterSpacing: "0.5px", color: "#24352c", fontSize: "18px", fontWeight: 400 }}>{inlineParts(line)}</p>);
    i += 1;
  }
  flushBodyCard();
  if (compositions?.length && !compositionInserted) compositions.forEach((entry) => nodes.push(<CompositionPreview key={`fallback-${entry.id}`} content={entry.content} author={entry.author} showAuthor={entry.showAuthor} teacherComment={teacherComment} showTeacherComment={showTeacherComment} />));
  return <>{nodes}</>;
}

function CompositionPreview({ content, author, showAuthor, teacherComment, showTeacherComment }: { content: string; author?: string; showAuthor?: boolean; teacherComment?: string; showTeacherComment?: boolean }) {
  const columns = 14;
  const rows = 18;
  const blocks = content.trim().split(/\n\s*\n/).filter(Boolean);
  const rawTitle = blocks[0]?.trim() || "作文标题";
  const hasTitle = rawTitle.startsWith("# ");
  const title = hasTitle ? rawTitle.slice(2) : "作文标题";
  const body = hasTitle ? blocks.slice(1) : blocks;
  const cells: string[] = [];
  body.forEach((paragraph) => {
    while (cells.length % columns !== 0) cells.push("");
    cells.push("", "", ...Array.from(paragraph.replace(/\s+/g, "")));
    while (cells.length % columns !== 0) cells.push("");
  });
  const pages: string[][] = [];
  const firstPageCapacity = (rows - 2) * columns;
  pages.push(cells.slice(0, firstPageCapacity));
  let offset = firstPageCapacity;
  while (offset < cells.length) {
    pages.push(cells.slice(offset, offset + rows * columns));
    offset += rows * columns;
  }
  return (
    <section style={{ width: "100%", margin: "46px 0 20px" }}>
      {pages.map((page, pageIndex) => (
        <section
          key={pageIndex}
          data-composition-paper="true"
          data-composition-page={pageIndex}
          style={{
            position: "relative",
            width: "110%",
            aspectRatio: "543 / 724",
            margin: pageIndex === 0 ? "0 0 0 -5%" : "68px 0 0 -5%",
            backgroundColor: "transparent",
            backgroundImage: "url('/qingningmeng-composition-paper-transparent.png')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            boxShadow: "0 10px 24px rgba(69,83,56,.14)",
            color: "#27352e",
            fontFamily: "KaiTi,STKaiti,'楷体',serif",
          }}
        >
          {pageIndex === 0 && showTeacherComment && teacherComment?.trim() && (
            <aside data-composition-comment="true" style={{ position: "absolute", zIndex: 3, top: "3.2%", right: "6.8%", width: "124px", color: "#b2342d", fontFamily: "KaiTi,STKaiti,'楷体',serif", fontSize: "14px", fontWeight: 700, lineHeight: 1.55, textAlign: "center", letterSpacing: "1px", transform: "rotate(-4deg)", textShadow: "0 1px 0 rgba(255,255,255,.75)" }}>
              {teacherComment}
            </aside>
          )}
          <div data-composition-grid="true" style={{ position: "absolute", left: "7.37%", top: "8.29%", width: "85.08%", height: "82.04%", display: "grid", gridTemplateColumns: "repeat(14, 1fr)", gridTemplateRows: "repeat(18, 1fr)" }}>
            {pageIndex === 0 && <strong data-composition-title="true" style={{ gridColumn: "1 / -1", gridRow: "span 2", display: "flex", alignItems: "center", justifyContent: "center", padding: "2px 0 0", boxSizing: "border-box", fontSize: "21px", lineHeight: 1, fontWeight: 700, letterSpacing: "4px" }}>{title}</strong>}
            {page.map((character, index) => (
              <span data-composition-cell="true" key={index} style={{ display: "flex", alignItems: "center", justifyContent: "center", minWidth: 0, minHeight: 0, fontSize: "17px", lineHeight: 1, fontWeight: 500 }}>{character || " "}</span>
            ))}
          </div>
          {pageIndex === pages.length - 1 && showAuthor && author?.trim() && AUTHOR_SIGNATURES[author.trim().replace(/^作者[：:]\s*/, "")] ? (
            <img data-composition-author="true" data-signature="true" src={AUTHOR_SIGNATURES[author.trim().replace(/^作者[：:]\s*/, "")]} alt={author.trim()} style={{ position: "absolute", right: "7%", bottom: "7%", width: "25%", height: "auto", mixBlendMode: "multiply" }} />
          ) : pageIndex === pages.length - 1 && showAuthor && author?.trim() && (
            <div data-composition-author="true" style={{ position: "absolute", right: "8%", bottom: "6.5%", color: "#32443a", fontSize: "52px", lineHeight: 1.2, letterSpacing: "2px", textAlign: "right", fontFamily: "'Liu Jian Mao Cao','Zhi Mang Xing','STXingkai','华文行楷','Xingkai SC',KaiTi,STKaiti,'楷体',cursive", transform: "rotate(-3deg)", textShadow: "0 1px 1px rgba(255,255,255,.6)" }}>{author.trim().replace(/^作者[：:]\s*/, "")}</div>
          )}
        </section>
      ))}
    </section>
  );
}

const tools = [
  { label: "章节标题", insert: "\n\n## 新章节\n\n" },
  { label: "小节编号", insert: "\n\n### 02\n\n" },
  { label: "青柠引用", insert: "\n\n> **青柠日记**\n>\n> 在这里写下没有说出口的话。\n\n" },
  { label: "章节配图", insert: "\n\n![章节氛围图](/divider4.jpg)\n\n" },
  { label: "背景卡片", insert: "\n\n> **本章序言**\n>\n> 在这里写本章引言。\n\n" },
  { label: "青柠分隔", insert: "\n\n---\n\n" },
];

const readingGuideTools = [
  { label: "插入图片", insert: "\n\n![青柠檬封面](/qingningmeng-cover-vertical.png)\n\n" },
  { label: "胡雨人设卡", insert: "\n\n![胡雨人设卡](/huyu-character-card.png)\n\n" },
  { label: "徐晴晴人设卡", insert: "\n\n![徐晴晴人设卡](/xuqingqing-character-card.png)\n\n" },
  { label: "小说简介", insert: "\n\n## 小说简介\n\n在这里填写小说简介。\n\n" },
  { label: "高分作文", insert: "\n\n## 高分作文一览\n\n### 《作文标题》\n\n在这里填写高分作文摘录。\n\n" },
  { label: "类型信息", insert: "\n\n## 小说类型\n\n**题材**：青春校园\n\n**篇幅**：预计 30 万字\n\n**章节**：预计 120 章\n\n" },
  { label: "付费标准", insert: "\n\n## 付费标准\n\n**免费试读**：请填写\n\n**付费章节**：请填写\n\n" },
  { label: "合集第一章", insert: "\n\n[合集第一章](请替换第一章文章链接)\n\n" },
  { label: "合集链接", insert: "\n\n[合集链接](请替换公众号合集链接)\n\n" },
  { label: "作者简介", insert: "\n\n## 作者简介\n\n**作者**：请填写作者笔名\n\n在这里填写作者介绍。\n\n" },
];

export default function MiniXiumi() {
  const [markdown, setMarkdown] = useState(INITIAL_MARKDOWN);
  const [compositions, setCompositions] = useState<CompositionEntry[]>(DEFAULT_COMPOSITIONS);
  const [chatRecords, setChatRecords] = useState<ChatRecord[]>(DEFAULT_CHAT_RECORDS);
  const [teacherComment, setTeacherComment] = useState(DEFAULT_TEACHER_COMMENT);
  const [showTeacherComment, setShowTeacherComment] = useState(true);
  const [showComposition, setShowComposition] = useState(false);
  const [compositionCollapsed, setCompositionCollapsed] = useState(false);
  const [showChatRecords, setShowChatRecords] = useState(false);
  const [isReadingGuide, setIsReadingGuide] = useState(false);
  const [copyState, setCopyState] = useState("复制到公众号（秀米方式）");
  const [storageReady, setStorageReady] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const markdownRef = useRef(markdown);
  markdownRef.current = markdown;
  const previewRef = useRef<HTMLElement>(null);
  const characters = useMemo(() => markdown.replace(/\s/g, "").length, [markdown]);
  const chatCharacters = useMemo(() => chatRecords.reduce((total, record) => total + record.messages.reduce((messageTotal, message) => messageTotal + message.name.replace(/\s/g, "").length + message.content.replace(/\s/g, "").length, 0), 0), [chatRecords]);

  useEffect(() => {
    const readingGuideMode = window.location.port === "3003";
    const compositionMode = window.location.port === "3002";
    const chatMode = window.location.port === "3004";
    setShowComposition(compositionMode || chatMode);
    setShowChatRecords(chatMode);
    setIsReadingGuide(readingGuideMode);
    const markdownStorageKey = readingGuideMode ? "qingningmeng-reading-guide" : chatMode ? "qingningmeng-chat-markdown-v1" : "qingningmeng-markdown";
    const saved = localStorage.getItem(markdownStorageKey);
    const bodySource = chatMode ? localStorage.getItem("qingningmeng-markdown") : null;
    let initialContent = saved || bodySource || (readingGuideMode ? READING_GUIDE_MARKDOWN : INITIAL_MARKDOWN);
    if (readingGuideMode) {
      initialContent = initialContent.replaceAll(
        "![阅读须知配图](/请替换图片文件名.png)",
        "![青柠檬封面](/qingningmeng-cover-vertical.png)",
      );
      initialContent = initialContent.replace(
        /## 目录[\s\S]*?(?=## 作者简介)/,
        `## 小说合集入口\n\n### 免费合集\n\n[免费合集第一章](https://mp.weixin.qq.com/s/REPLACE_FREE_FIRST_CHAPTER)\n\n[免费合集链接](https://mp.weixin.qq.com/mp/appmsgalbum?album_id=REPLACE_FREE_ALBUM_ID)\n\n### 付费合集\n\n[付费合集第一章](https://mp.weixin.qq.com/s/REPLACE_PAID_FIRST_CHAPTER)\n\n[付费合集链接](https://mp.weixin.qq.com/mp/appmsgalbum?album_id=REPLACE_PAID_ALBUM_ID)\n\n`,
      );
      if (/## 小说合集入口[\s\S]*?\*\*收录内容\*\*/.test(initialContent)) {
        const freeAlbum = initialContent.match(/### 免费合集[\s\S]*?\]\(([^)]+)\)/)?.[1] || "https://mp.weixin.qq.com/mp/appmsgalbum?album_id=REPLACE_FREE_ALBUM_ID";
        const paidAlbum = initialContent.match(/### 付费合集[\s\S]*?\]\(([^)]+)\)/)?.[1] || "https://mp.weixin.qq.com/mp/appmsgalbum?album_id=REPLACE_PAID_ALBUM_ID";
        initialContent = initialContent.replace(
          /## 小说合集入口[\s\S]*?(?=## 作者简介)/,
          `## 小说合集入口\n\n### 免费合集\n\n[免费合集第一章](https://mp.weixin.qq.com/s/REPLACE_FREE_FIRST_CHAPTER)\n\n[免费合集链接](${freeAlbum})\n\n### 付费合集\n\n[付费合集第一章](https://mp.weixin.qq.com/s/REPLACE_PAID_FIRST_CHAPTER)\n\n[付费合集链接](${paidAlbum})\n\n`,
        );
      }
      if (initialContent.includes("## 小说预览") || (initialContent.includes("## 高分作文一览") && !initialContent.includes("不是催促青柠提前变甜"))) {
        initialContent = initialContent.replace(
          /## (?:小说预览|高分作文一览)[\s\S]*?(?=## 小说类型)/,
          `## 高分作文一览\n\n### 《青柠的味道》\n\n青春像一颗还没有成熟的青柠，外表青涩，味道微酸，却藏着独属于夏天的清香。那些曾经让我们落泪的瞬间，也会在很多年后，成为记忆里最明亮的一束光。\n\n成长不是催促青柠提前变甜，而是允许它带着酸涩慢慢成熟。每一道旧伤都会结成纹路，提醒我们曾经怎样认真地生活过。\n\n### 《雨落下的时候》\n\n雨点落在窗台上，一声接着一声，像有人把没有说出口的话，轻轻敲给夜晚听。我忽然明白，有些成长并不是学会遗忘，而是终于敢回头看那段来路。\n\n雨停以后，操场上积着一层浅浅的水，倒映着被洗亮的天空。我踩过水面，也踩过昨日的胆怯，第一次觉得前方没有想象中那么遥远。\n\n### 《写给未成熟的自己》\n\n如果可以回到过去，我不会催促那个笨拙又敏感的自己快点长大。我会告诉她：慢一点也没有关系，青柠总有成熟的一天，而你也会拥有属于自己的清香。\n\n后来我才明白，真正的成熟不是变得坚硬，而是在看清生活的锋利之后，依然愿意相信温柔、相信自己，也相信明天会有新的光。\n\n`,
        );
      } else if (!initialContent.includes("## 高分作文一览")) {
        initialContent = initialContent.replace(
          /\n## 小说类型/,
          `\n## 高分作文一览\n\n### 《青柠的味道》\n\n青春像一颗还没有成熟的青柠，外表青涩，味道微酸，却藏着独属于夏天的清香。那些曾经让我们落泪的瞬间，也会在很多年后，成为记忆里最明亮的一束光。\n\n成长不是催促青柠提前变甜，而是允许它带着酸涩慢慢成熟。每一道旧伤都会结成纹路，提醒我们曾经怎样认真地生活过。\n\n### 《雨落下的时候》\n\n雨点落在窗台上，一声接着一声，像有人把没有说出口的话，轻轻敲给夜晚听。我忽然明白，有些成长并不是学会遗忘，而是终于敢回头看那段来路。\n\n雨停以后，操场上积着一层浅浅的水，倒映着被洗亮的天空。我踩过水面，也踩过昨日的胆怯，第一次觉得前方没有想象中那么遥远。\n\n### 《写给未成熟的自己》\n\n如果可以回到过去，我不会催促那个笨拙又敏感的自己快点长大。我会告诉她：慢一点也没有关系，青柠总有成熟的一天，而你也会拥有属于自己的清香。\n\n后来我才明白，真正的成熟不是变得坚硬，而是在看清生活的锋利之后，依然愿意相信温柔、相信自己，也相信明天会有新的光。\n\n## 小说类型`,
        );
      }
    }
    initialContent = initialContent.replace(
      /!\[章节氛围图\]\([^)]+\)/g,
      "![章节氛围图](/divider4.jpg)",
    );
    setMarkdown(initialContent.replace(/🍋(?!‍🟩)/gu, "🍋‍🟩"));
    const savedCompositions = localStorage.getItem("qingningmeng-compositions-v2");
    const savedComposition = localStorage.getItem("qingningmeng-composition");
    if (savedCompositions) {
      try {
        const parsed = JSON.parse(savedCompositions) as CompositionEntry[];
        if (Array.isArray(parsed) && parsed.length) setCompositions(parsed.map((entry, index) => ({ id: entry.id || `composition-${index + 1}`, content: entry.content || DEFAULT_COMPOSITION, author: entry.author || "请填写作者名", showAuthor: entry.showAuthor !== false })));
      } catch {
        setCompositions([{ ...DEFAULT_COMPOSITIONS[0], content: savedComposition || DEFAULT_COMPOSITION }]);
      }
    } else if (savedComposition) {
      setCompositions([{ ...DEFAULT_COMPOSITIONS[0], content: savedComposition }]);
    }
    const savedTeacherComment = localStorage.getItem("qingningmeng-teacher-comment");
    if (savedTeacherComment) setTeacherComment(savedTeacherComment);
    const savedTeacherCommentVisibility = localStorage.getItem("qingningmeng-teacher-comment-visible");
    if (savedTeacherCommentVisibility !== null) setShowTeacherComment(savedTeacherCommentVisibility === "true");
    if (chatMode) {
      const savedSenderVersion = localStorage.getItem("qingningmeng-chat-records-v3");
      const savedChatRecords = savedSenderVersion || localStorage.getItem("qingningmeng-chat-records-v2") || localStorage.getItem("qingningmeng-chat-records-v1");
      if (savedChatRecords) {
        try {
          const parsed = JSON.parse(savedChatRecords) as Array<ChatRecord | (ChatMessage & { id: string })>;
          if (Array.isArray(parsed)) {
            const isOldDefault = parsed.length === 1 && !("messages" in parsed[0]) && parsed[0].name === "胡雨" && parsed[0].content === "不要跟他们站队，你要好好学习。";
            if (isOldDefault) {
              setChatRecords(DEFAULT_CHAT_RECORDS);
            } else {
              setChatRecords(parsed.filter((entry) => entry && entry.id).map((entry, recordIndex) => {
                if ("messages" in entry && Array.isArray(entry.messages)) {
                  return {
                    id: entry.id || `chat-${recordIndex + 1}`,
                    messages: entry.messages.map((message, messageIndex) => ({ id: message.id || `message-${recordIndex + 1}-${messageIndex + 1}`, name: message.name || "未命名", content: message.content || "", isMine: Boolean(savedSenderVersion) && message.isMine === true })),
                  };
                }
                return {
                  id: entry.id || `chat-${recordIndex + 1}`,
                  messages: [{ id: `message-${recordIndex + 1}-1`, name: entry.name || "未命名", content: entry.content || "", isMine: Boolean(savedSenderVersion) && entry.isMine === true }],
                };
              }));
            }
          }
        } catch {
          setChatRecords(DEFAULT_CHAT_RECORDS);
        }
      }
    }
    setStorageReady(true);
  }, []);
  useEffect(() => {
    if (storageReady) localStorage.setItem(isReadingGuide ? "qingningmeng-reading-guide" : showChatRecords ? "qingningmeng-chat-markdown-v1" : "qingningmeng-markdown", markdown);
  }, [markdown, storageReady, isReadingGuide, showChatRecords]);
  useEffect(() => {
    if (storageReady && showChatRecords) localStorage.setItem("qingningmeng-chat-records-v3", JSON.stringify(chatRecords));
  }, [chatRecords, storageReady, showChatRecords]);
  useEffect(() => {
    if (storageReady) {
      localStorage.setItem("qingningmeng-compositions-v2", JSON.stringify(compositions));
      localStorage.setItem("qingningmeng-composition", compositions[0]?.content || DEFAULT_COMPOSITION);
    }
  }, [compositions, storageReady]);
  useEffect(() => {
    if (storageReady) localStorage.setItem("qingningmeng-teacher-comment", teacherComment);
  }, [teacherComment, storageReady]);
  useEffect(() => {
    if (storageReady) localStorage.setItem("qingningmeng-teacher-comment-visible", String(showTeacherComment));
  }, [showTeacherComment, storageReady]);

  function insertSnippet(snippet: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const current = markdownRef.current;
    const next = current.slice(0, start) + snippet + current.slice(end);
    markdownRef.current = next;
    const cursor = start + snippet.length;
    setMarkdown(next);
    requestAnimationFrame(() => {
      const editor = textareaRef.current;
      if (!editor) return;
      editor.focus({ preventScroll: true });
      editor.selectionStart = editor.selectionEnd = cursor;
    });
  }

  function updateComposition(id: string, updates: Partial<CompositionEntry>) {
    setCompositions((current) => current.map((entry) => entry.id === id ? { ...entry, ...updates } : entry));
  }

  function addComposition() {
    setCompositions((current) => [...current, {
      id: `composition-${Date.now()}`,
      content: `# 新作文标题\n\n在这里填写作文正文。`,
      author: "请填写作者名",
      showAuthor: true,
    }]);
  }

  function removeComposition(id: string) {
    setCompositions((current) => current.length > 1 ? current.filter((entry) => entry.id !== id) : current);
  }

  function updateChatMessage(recordId: string, messageId: string, updates: Partial<ChatMessage>) {
    setChatRecords((current) => current.map((record) => record.id === recordId ? { ...record, messages: record.messages.map((message) => message.id === messageId ? { ...message, ...updates } : message) } : record));
  }

  function addChatRecord() {
    const now = Date.now();
    setChatRecords((current) => [...current, {
      id: `chat-${now}`,
      messages: [
        { id: `message-${now}-1`, name: "对方", content: "在这里填写对方发来的消息。", isMine: false },
        { id: `message-${now}-2`, name: "对方", content: "在这里填写下一条消息。", isMine: false },
      ],
    }]);
  }

  function addChatMessage(recordId: string) {
    const messageId = `message-${Date.now()}`;
    setChatRecords((current) => current.map((record) => record.id === recordId ? { ...record, messages: [...record.messages, { id: messageId, name: "对方", content: "在这里继续聊天。", isMine: false }] } : record));
  }

  function removeChatMessage(recordId: string, messageId: string) {
    setChatRecords((current) => current.map((record) => record.id === recordId && record.messages.length > 1 ? { ...record, messages: record.messages.filter((message) => message.id !== messageId) } : record));
  }

  function insertChatRecord(id: string) {
    insertSnippet(`\n\n[[聊天记录:${id}]]\n\n`);
  }

  function removeChatRecord(id: string) {
    setChatRecords((current) => current.filter((entry) => entry.id !== id));
    setMarkdown((current) => current.replaceAll(`[[聊天记录:${id}]]`, "").replace(/\n{3,}/g, "\n\n"));
  }

  async function copyRichText() {
    const preview = previewRef.current;
    if (!preview) return;
    try {
    const clone = preview.cloneNode(true) as HTMLElement;
    const embeddedAssets = new Map<string, string>();
    async function embed(url: string, fadeCover = false) {
      const cacheKey = `${fadeCover ? "cover:" : ""}${url}`;
      if (embeddedAssets.has(cacheKey)) return embeddedAssets.get(cacheKey)!;
      let blob = await fetch(url).then((response) => {
        if (!response.ok) throw new Error("图片下载失败");
        return response.blob();
      });
      if (fadeCover) {
        const bitmap = await createImageBitmap(blob);
        try {
          const canvas = document.createElement("canvas");
          canvas.width = bitmap.width;
          canvas.height = bitmap.height;
          const context = canvas.getContext("2d");
          if (!context) throw new Error("无法生成封面过渡");
          context.drawImage(bitmap, 0, 0);
          // Bake the fade into opaque pixels so WeChat need not preserve masks.
          const fade = context.createLinearGradient(0, 0, 0, canvas.height);
          fade.addColorStop(0, "rgba(251,250,243,1)");
          fade.addColorStop(0.04, "rgba(251,250,243,0)");
          fade.addColorStop(0.80, "rgba(251,250,243,0)");
          fade.addColorStop(1, "rgba(251,250,243,1)");
          context.fillStyle = fade;
          context.fillRect(0, 0, canvas.width, canvas.height);
          blob = await new Promise<Blob>((resolve, reject) => canvas.toBlob((result) => result ? resolve(result) : reject(new Error("封面生成失败")), "image/png"));
        } finally {
          bitmap.close();
        }
      }
      const dataUrl = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(String(reader.result));
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      embeddedAssets.set(cacheKey, dataUrl);
      return dataUrl;
    }

    // Keep the article editable while using a background already hosted in
    // WeChat's own material library—the same approach used by Xiumi layouts.
    clone.style.backgroundImage = `url("${WECHAT_BACKGROUND}")`;
    clone.style.backgroundRepeat = "repeat-y";
    clone.style.backgroundPosition = "center top";
    clone.style.backgroundSize = "100% auto";

    await Promise.all(Array.from(clone.querySelectorAll("img")).map(async (img) => {
      const src = img.getAttribute("src");
      const fadeCover = img.dataset.coverFade === "true";
      if (!src || (src.startsWith("data:") && !fadeCover)) return;
      try {
        img.setAttribute("src", await embed(new URL(src, window.location.href).href, fadeCover));
        if (fadeCover) {
          img.style.removeProperty("mask-image");
          img.style.removeProperty("-webkit-mask-image");
          delete img.dataset.coverFade;
        }
      } catch {
        if (fadeCover) throw new Error("封面过渡生成失败，请确认封面图片可加载后重试");
        // Keep the original URL when an image host blocks local embedding.
        // This lets the rest of the article copy normally instead of surfacing
        // an unhandled promise rejection in the editor.
      }
    }));
    // Only the composition paper gets a WeChat-safe representation. Keep the
    // existing paper image and use ordinary text rows—no table—so the current
    // WeChat layout can be tuned with padding, position and line-height alone.
    for (const paper of Array.from(clone.querySelectorAll<HTMLElement>("[data-composition-paper]"))) {
      const pageIndex = Number(paper.dataset.compositionPage || "0");
      const title = paper.querySelector<HTMLElement>("[data-composition-title]")?.innerText.trim() || "";
      const comment = paper.querySelector<HTMLElement>("[data-composition-comment]")?.innerText.trim() || "";
      const authorNode = paper.querySelector<HTMLElement>("[data-composition-author]");
      const signatureSrc = paper.querySelector<HTMLImageElement>("img[data-composition-author][data-signature]")?.getAttribute("src") || "";
      const author = authorNode?.innerText.trim() || (signatureSrc ? authorNode?.getAttribute("alt") || "" : "");
      const characters = Array.from(paper.querySelectorAll<HTMLElement>("[data-composition-cell]")).map((cell) => cell.innerText || " ");
      const rowCount = pageIndex === 0 ? 16 : 18;
      while (characters.length < rowCount * 14) characters.push(" ");

      const safePaper = document.createElement("section");
      safePaper.style.display = "block";
      safePaper.style.width = "100%";
      safePaper.style.minWidth = "100%";
      safePaper.style.maxWidth = "100%";
      safePaper.style.height = "auto";
      safePaper.style.boxSizing = "border-box";
      safePaper.style.margin = pageIndex === 0 ? "0 auto" : "68px auto 0";
      safePaper.style.padding = "0";
      safePaper.style.overflow = "hidden";
      safePaper.style.backgroundColor = "transparent";
      safePaper.style.backgroundImage = `url("${WECHAT_COMPOSITION_BACKGROUND}")`;
      safePaper.style.backgroundPosition = "center center";
      safePaper.style.backgroundRepeat = "no-repeat";
      safePaper.style.backgroundSize = "100% 100%";
      safePaper.style.color = "#27352e";
      safePaper.style.fontFamily = "KaiTi,STKaiti,'楷体',serif";
      safePaper.style.writingMode = "horizontal-tb";

      if (comment) {
        const commentCharacters = Array.from(comment);
        const commentLines: string[] = [];
        for (let index = 0; index < commentCharacters.length; index += 8) {
          commentLines.push(commentCharacters.slice(index, index + 8).join(""));
        }
        const canvas = document.createElement("canvas");
        canvas.width = 320;
        canvas.height = Math.max(96, 20 + commentLines.length * 38);
        const context = canvas.getContext("2d");
        if (context) {
          context.clearRect(0, 0, canvas.width, canvas.height);
          context.fillStyle = "#b2342d";
          context.font = "700 28px KaiTi, STKaiti, serif";
          context.textAlign = "center";
          context.textBaseline = "middle";
          commentLines.forEach((line, lineIndex) => {
            context.fillText(line, canvas.width / 2, 25 + lineIndex * 38);
          });
        }
        const commentRow = document.createElement("p");
        commentRow.style.display = "block";
        commentRow.style.height = "48px";
        commentRow.style.margin = "0";
        commentRow.style.padding = "3px 28px 0 0";
        commentRow.style.boxSizing = "border-box";
        commentRow.style.textAlign = "right";
        commentRow.style.lineHeight = "0";
        const commentImage = document.createElement("img");
        commentImage.src = canvas.toDataURL("image/png");
        commentImage.alt = comment;
        commentImage.setAttribute("width", "150");
        commentImage.style.display = "inline-block";
        commentImage.style.width = "150px";
        commentImage.style.maxWidth = "38%";
        commentImage.style.height = "auto";
        commentImage.style.margin = "0";
        commentImage.style.padding = "0";
        commentRow.appendChild(commentImage);
        safePaper.appendChild(commentRow);
      } else {
        const emptyHeader = document.createElement("p");
        emptyHeader.innerHTML = "&nbsp;";
        emptyHeader.style.display = "block";
        emptyHeader.style.height = "48px";
        emptyHeader.style.margin = "0";
        emptyHeader.style.padding = "0";
        emptyHeader.style.fontSize = "1px";
        emptyHeader.style.lineHeight = "1px";
        safePaper.appendChild(emptyHeader);
      }

      const textLayer = document.createElement("section");
      textLayer.style.display = "block";
      textLayer.style.width = "auto";
      textLayer.style.height = "auto";
      textLayer.style.margin = "0 7.55% 0 7.37%";
      textLayer.style.padding = "0";
      textLayer.style.boxSizing = "border-box";

      if (pageIndex === 0) {
        const titleLine = document.createElement("p");
        titleLine.innerText = title;
        titleLine.style.display = "block";
        titleLine.style.height = "46px";
        titleLine.style.margin = "0";
        titleLine.style.padding = "4.5px 0";
        titleLine.style.boxSizing = "border-box";
        titleLine.style.textAlign = "center";
        titleLine.style.fontSize = "21px";
        titleLine.style.fontWeight = "700";
        titleLine.style.letterSpacing = "3px";
        titleLine.style.lineHeight = "1.75";
        titleLine.style.whiteSpace = "nowrap";
        textLayer.appendChild(titleLine);
      }

      for (let rowIndex = 0; rowIndex < rowCount; rowIndex += 1) {
        const row = document.createElement("p");
        row.style.display = "block";
        row.style.width = "100%";
        row.style.height = "24px";
        row.style.margin = "0";
        row.style.padding = "3.5px 0";
        row.style.boxSizing = "border-box";
        row.style.fontSize = "17px";
        row.style.fontWeight = "500";
        row.style.lineHeight = "1";
        row.style.whiteSpace = "nowrap";
        row.style.wordBreak = "keep-all";
        for (let columnIndex = 0; columnIndex < 14; columnIndex += 1) {
          const cell = document.createElement("span");
          cell.innerText = characters[rowIndex * 14 + columnIndex] || " ";
          cell.style.display = "inline-block";
          cell.style.width = "7.142857%";
          cell.style.height = "100%";
          cell.style.padding = "0";
          cell.style.boxSizing = "border-box";
          cell.style.textAlign = "center";
          cell.style.verticalAlign = "middle";
          row.appendChild(cell);
        }
        textLayer.appendChild(row);
      }
      safePaper.appendChild(textLayer);
      const footerSpace = document.createElement("p");
      footerSpace.innerHTML = author || "&nbsp;";
      footerSpace.style.display = "block";
      footerSpace.style.height = "48px";
      footerSpace.style.margin = "0";
      footerSpace.style.padding = author ? "13px 8% 14px 0" : "0";
      footerSpace.style.boxSizing = "border-box";
      footerSpace.style.color = "#3f4f45";
      footerSpace.style.fontFamily = "'Liu Jian Mao Cao','Zhi Mang Xing','STXingkai','华文行楷','Xingkai SC',KaiTi,STKaiti,'楷体',cursive";
      footerSpace.style.fontStyle = "italic";
      footerSpace.style.fontSize = author ? "52px" : "1px";
      footerSpace.style.fontWeight = "";
      footerSpace.style.color = "#32443a";
      footerSpace.style.textShadow = "none";
      footerSpace.style.textAlign = "right";
      footerSpace.style.letterSpacing = author ? "2px" : "0";
      footerSpace.style.lineHeight = author ? "1.5" : "1px";
      if (signatureSrc) {
        const signatureImage = document.createElement("img");
        try {
          signatureImage.src = await embed(new URL(signatureSrc, window.location.href).href);
        } catch {
          signatureImage.src = signatureSrc;
        }
        signatureImage.alt = author;
        signatureImage.setAttribute("width", "24.5%");
        signatureImage.style.display = "inline-block";
        signatureImage.style.width = "24.5%";
        signatureImage.style.maxWidth = "40%";
        signatureImage.style.height = "auto";
        signatureImage.style.margin = "0";
        signatureImage.style.padding = "0";
        signatureImage.style.verticalAlign = "middle";
        const signatureRow = document.createElement("p");
        signatureRow.style.display = "block";
        signatureRow.style.height = "56px";
        signatureRow.style.margin = "0";
        signatureRow.style.padding = "6px 8% 6px 0";
        signatureRow.style.boxSizing = "border-box";
        signatureRow.style.textAlign = "right";
        signatureRow.appendChild(signatureImage);
        safePaper.appendChild(signatureRow);
      } else {
        safePaper.appendChild(footerSpace);
      }
      paper.replaceWith(safePaper);
    }
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
      setCopyState("已复制，背景和文字可编辑");
      window.setTimeout(() => setCopyState("复制到公众号（秀米方式）"), 2500);
    } catch { setCopyState("请允许剪贴板权限"); }
    } catch {
      setCopyState("复制失败，请刷新后重试");
      window.setTimeout(() => setCopyState("复制到公众号（秀米方式）"), 2500);
    }
  }

  function downloadMarkdown() {
    const url = URL.createObjectURL(new Blob([markdown], { type: "text/markdown;charset=utf-8" }));
    const anchor = document.createElement("a"); anchor.href = url; anchor.download = isReadingGuide ? "青柠檬-阅读须知.md" : showChatRecords ? "青柠檬-聊天排版稿.md" : "青柠檬-排版稿.md"; anchor.click(); URL.revokeObjectURL(url);
  }

  const activeTools = isReadingGuide ? readingGuideTools : tools;

  return (
    <main className="studio-shell">
      <header className="topbar">
        <div className="brand"><span className="brand-fruit">青柠</span><div><strong>青柠排版间</strong><small>{isReadingGuide ? "《青柠檬》阅读须知版" : showComposition ? "正文＋作文纸版" : showChatRecords ? "正文＋聊天记录版" : "《青柠檬》正文版"}</small></div></div>
        <div className="top-actions"><span>{(characters + (showComposition ? compositions.reduce((total, entry) => total + entry.content.replace(/\s/g, "").length, 0) : 0) + (showChatRecords ? chatCharacters : 0)).toLocaleString()} 字</span><button className="ghost-button" onClick={downloadMarkdown}>导出 Markdown</button><button className="primary-button" onClick={copyRichText}>{copyState}</button></div>
      </header>
      <div className="workspace">
        <aside className="toolbox">
          <div className="toolbox-title">常用组件</div><p>点击后插入到光标位置</p>
          <div className="tool-grid">{activeTools.map((tool) => <button key={tool.label} onClick={() => insertSnippet(tool.insert)}>{tool.label}</button>)}</div>
          <div className="palette-card"><strong>青柠色板</strong><div className="swatches"><i /><i /><i /><i /></div><small>墨绿 · 青柠 · 奶油白 · 雾蓝</small></div>
          <div className="tip-card">{isReadingGuide ? "图片放进 public 文件夹后，正文写成：![图片说明](/图片名.png)。合集链接写成：[入口名称](公众号合集链接)。" : showChatRecords ? "一段聊天可以添加很多条消息。先把正文光标放到需要的位置，再点击“插入整段聊天”。聊天框和正文都会保持为真实文字。" : "内容会自动保存在当前浏览器。点击“复制到公众号”后，正文仍是真实文字，背景直接使用公众号公共素材库图片。"}</div>
        </aside>
        <section className={`editor-pane${showComposition ? " with-composition" : ""}${showChatRecords ? " with-chat" : ""}`}>
          <div className="pane-heading"><strong>{isReadingGuide ? "阅读须知内容" : "Markdown 正文"}</strong><span>实时保存</span></div>
          <textarea className="markdown-editor" ref={textareaRef} value={markdown} onChange={(event) => setMarkdown(event.target.value)} spellCheck={false} aria-label={isReadingGuide ? "阅读须知编辑器" : "Markdown 正文编辑器"} />
          {showChatRecords && (
            <div className="chat-editor-panel">
              <div className="pane-heading"><strong>聊天记录库（{chatRecords.length} 段）</strong><button type="button" className="chat-add-button" onClick={addChatRecord}>＋ 新增一段聊天</button></div>
              <div className="chat-list">
                {chatRecords.length === 0 && <div className="chat-empty">还没有聊天记录，点击“新增一段聊天”开始添加。</div>}
                {chatRecords.map((record, index) => (
                  <section className="chat-entry" key={record.id}>
                    <div className="chat-entry-heading">
                      <strong>聊天段落 {String(index + 1).padStart(2, "0")}</strong>
                      <span>{record.messages.length} 条消息 · 可重复插入</span>
                      <button type="button" onClick={() => removeChatRecord(record.id)}>删除整段</button>
                    </div>
                    <div className="chat-message-list">
                      {record.messages.map((message, messageIndex) => (
                        <div className="chat-message-editor" key={message.id}>
                          <div className="chat-message-heading">
                            <span>消息 {String(messageIndex + 1).padStart(2, "0")}</span>
                            <button type="button" onClick={() => removeChatMessage(record.id, message.id)} disabled={record.messages.length === 1}>删除此条</button>
                          </div>
                          <div className="chat-sender-control">
                            <span>发送方</span>
                            <button type="button" aria-pressed={message.isMine} onClick={() => updateChatMessage(record.id, message.id, { isMine: !message.isMine })}>{message.isMine ? "我发的" : "对方发的"}</button>
                            <small>点击切换</small>
                          </div>
                          <label className="chat-name-field">
                            <span>名字</span>
                            <input value={message.name} onChange={(event) => updateChatMessage(record.id, message.id, { name: event.target.value })} placeholder="请输入角色名字" aria-label={`聊天段落 ${index + 1} 消息 ${messageIndex + 1} 名字`} />
                          </label>
                          <label className="chat-content-field">
                            <span>内容</span>
                            <textarea value={message.content} onChange={(event) => updateChatMessage(record.id, message.id, { content: event.target.value })} placeholder="请输入聊天内容，多行内容会保留换行" spellCheck={false} aria-label={`聊天段落 ${index + 1} 消息 ${messageIndex + 1} 内容`} />
                          </label>
                        </div>
                      ))}
                      <button type="button" className="chat-add-message-button" onClick={() => addChatMessage(record.id)}>＋ 添加下一条消息</button>
                    </div>
                    <button type="button" className="chat-insert-button" onClick={() => insertChatRecord(record.id)}>插入整段聊天到正文光标处</button>
                  </section>
                ))}
              </div>
            </div>
          )}
          {showComposition && (
            <div className={`composition-editor-panel${compositionCollapsed ? " collapsed" : ""}`}>
              <div className="pane-heading"><strong>作文板块（{compositions.length} 篇）</strong><span style={{ display: "flex", gap: 6 }}><button type="button" className="composition-add-button" onClick={() => setCompositionCollapsed((folded) => !folded)}>{compositionCollapsed ? "展开" : "隐藏"}</button><button type="button" className="composition-add-button" onClick={addComposition}>＋ 添加作文</button></span></div>
              {!compositionCollapsed && (<><div className="teacher-comment-control">
                <label htmlFor="teacher-comment">红笔批语</label>
                <input id="teacher-comment" value={teacherComment} onChange={(event) => setTeacherComment(event.target.value)} disabled={!showTeacherComment} aria-label="红笔批语文字" />
                <button type="button" onClick={() => setShowTeacherComment((visible) => !visible)}>{showTeacherComment ? "隐藏" : "显示"}</button>
              </div>
              <div className="composition-list">
                {compositions.map((entry, index) => (
                  <section className="composition-entry" key={entry.id}>
                    <div className="composition-entry-heading">
                      <strong>作文 {String(index + 1).padStart(2, "0")}</strong>
                      <span>首行用 # 写标题</span>
                      <button type="button" onClick={() => removeComposition(entry.id)} disabled={compositions.length === 1}>删除</button>
                    </div>
                    <div className="composition-author-control">
                      <label htmlFor={`composition-author-${entry.id}`}>作者名</label>
                      <select id={`composition-author-${entry.id}`} value={entry.author} onChange={(event) => updateComposition(entry.id, { author: event.target.value })} aria-label={`作文 ${index + 1} 作者名`}>
                        {Object.keys(AUTHOR_SIGNATURES).map((name) => <option key={name} value={name}>{name}</option>)}
                      </select>
                      <button type="button" onClick={() => updateComposition(entry.id, { showAuthor: !entry.showAuthor })}>{entry.showAuthor ? "隐藏作者" : "显示作者"}</button>
                    </div>
                    <textarea value={entry.content} onChange={(event) => updateComposition(entry.id, { content: event.target.value })} spellCheck={false} aria-label={`作文 ${index + 1} 编辑器`} />
                  </section>
                ))}
              </div></>) }
            </div>
          )}
        </section>
        <section className="preview-pane">
          <div className="pane-heading"><strong>公众号后台宽屏预览</strong><span>677 px</span></div>
          <div className="phone-stage">
            <section ref={previewRef} className="wechat-article" style={{ maxWidth: "677px", margin: "0 auto", padding: "14px 14px 44px", backgroundColor: "transparent", backgroundImage: `url("${WECHAT_BACKGROUND}")`, backgroundRepeat: "repeat-y", backgroundPosition: "center top", backgroundSize: "100% auto", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI','PingFang SC','Hiragino Sans GB','Microsoft YaHei',sans-serif" }}>
              {isReadingGuide ? <ReadingGuidePreview markdown={markdown} /> : <ArticlePreview markdown={markdown} compositions={showComposition && !compositionCollapsed ? compositions : undefined} chatRecords={showChatRecords ? chatRecords : undefined} teacherComment={teacherComment} showTeacherComment={showTeacherComment} />}
            </section>
          </div>
        </section>
      </div>
    </main>
  );
}
