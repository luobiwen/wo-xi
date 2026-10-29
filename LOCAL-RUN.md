# 本地运行

源码来自 luobiwen/wo-xi，项目为“青柠排版间｜迷你秀米”。

双击 start-local.cmd，打开 http://127.0.0.1:3000/ 。保持启动窗口运行。

local-preview 直接加载原始 app/mini-xiumi.tsx、app/globals.css 和 public 图片，提供无需 Cloudflare 服务的本地前端运行入口。文章编辑、预览、浏览器本地保存和复制均使用原组件；微信图片上传脚本需要单独配置微信凭据。

已验证 local-preview 的生产构建通过。浏览器访问未获许可，未做页面视觉检查。
