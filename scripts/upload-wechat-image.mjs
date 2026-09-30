/**
 * 上传图片到微信公众号永久素材库（material/add_material）。
 *
 * 用法：
 *   WECHAT_APP_ID=xxx WECHAT_APP_SECRET=yyy node scripts/upload-wechat-image.mjs [图片路径]
 *
 * 说明：
 *   - 凭据必须走环境变量，不写进代码。
 *   - 需要【公众号】的 AppID / AppSecret（mp.weixin.qq.com → 设置与开发 → 基本配置），
 *     小程序的 AppID/Secret 无法调用公众号素材接口。
 *   - 成功后返回 media_id 和图片 URL，URL 可直接用于公众号文章正文/背景图。
 */

import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const APP_ID = process.env.WECHAT_APP_ID;
const APP_SECRET = process.env.WECHAT_APP_SECRET;
const IMAGE_PATH = process.argv[2] ?? resolve("outputs", "qingningmeng-background-seamless.png");

if (!APP_ID || !APP_SECRET) {
  console.error("缺少环境变量：WECHAT_APP_ID / WECHAT_APP_SECRET");
  process.exit(1);
}

async function getAccessToken(appid, secret) {
  const url =
    "https://api.weixin.qq.com/cgi-bin/token" +
    `?grant_type=client_credential&appid=${encodeURIComponent(appid)}&secret=${encodeURIComponent(secret)}`;
  const res = await fetch(url);
  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`获取 access_token 失败：${JSON.stringify(data)}`);
  }
  return data.access_token;
}

async function uploadPermanentImage(token, path) {
  const buffer = await readFile(path);
  const form = new FormData();
  form.append(
    "media",
    new Blob([buffer], { type: "image/png" }),
    "qingningmeng-background-seamless.png",
  );
  const url = `https://api.weixin.qq.com/cgi-bin/material/add_material?access_token=${token}&type=image`;
  const res = await fetch(url, { method: "POST", body: form });
  const data = await res.json();
  if (data.errcode) {
    throw new Error(`上传素材失败：${JSON.stringify(data)}`);
  }
  return data;
}

const token = await getAccessToken(APP_ID, APP_SECRET);
const result = await uploadPermanentImage(token, IMAGE_PATH);
console.log("上传成功：");
console.log(JSON.stringify(result, null, 2));
console.log(`\nmedia_id : ${result.media_id}`);
console.log(`图片 URL : ${result.url}`);
