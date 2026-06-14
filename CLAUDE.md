# 项目：ICCAD 2026 Workshop 静态网站

> 这份文件用于跨对话续接。下次在 `/home/tankaixin/program/web` 目录打开新会话，
> 说一句"继续之前的工作"，即可自动读到此文件并接着干。

## 目标
**GitHub Pages 静态会议网站**，正式上线地址（根域名形式，仿 iccad-halo.github.io）：

### 🌐 正式地址：https://iccad-2026.github.io/

样式/结构参考 [iccad-halo.github.io](https://iccad-halo.github.io)（ICCAD HALO Workshop 2020）。

## 仓库与部署架构（重要）—— 目前有【两个站、两种风格】

### 站 A：精致版（根域名）
- 本地目录：`/home/tankaixin/program/web`（就是本文件所在目录）。
- 仓库：`iccad-2026/iccad-2026.github.io`（组织名下），remote 名 **`gh-pages`**。
- 风格：现代深蓝 + 卡片 + sticky 导航（`css/style.css` + `js/main.js`）。
- 🌐 **https://iccad-2026.github.io/**
- 更新：在本目录改文件 → `git push gh-pages main`。

### 站 B：朴素复刻版（项目页，带路径）
- 本地目录：`/home/tankaixin/program/web-plain`（独立 clone，避免和站 A 混）。
- 仓库：`PopsicleTan/iccad-2026`，remote 名 **`origin`**（在 web-plain 里就是 origin）。
- 风格：**极简学术风、纯文字、Times 衬线、单栏**，仿原参考站 iccad-halo（无 JS）。
- 🌐 **https://popsicletan.github.io/iccad-2026/**
- 更新：在 `web-plain` 目录改文件 → `git push origin main`。
- ⚠️ 注意：`web` 目录里的 `origin` 仍指向同一旧仓库，但内容是精致版；**不要**从 `web`
  目录推 `origin`，否则会把朴素版覆盖回精致版。改朴素版一律去 `web-plain`。

### GitHub Pages 域名规则备忘
`https://<账号名>.github.io/<仓库名>/`；仓库名 == `<账号>.github.io` 时才挂根域名。
账号名决定域名，仓库名只在斜杠后。

## 技术选型
- 纯静态 HTML + CSS + 少量 JS，**无构建步骤**（最省心、GitHub Pages 直接托管）。
- `.nojekyll` 已加，按原样托管文件，不走 Jekyll。
- 单页结构，sticky 导航，深蓝(#0d2b4e)+蓝色点缀(#2f80ed)，响应式。

## 文件
- `index.html` — 单页，含 About / Topics / Speakers / Program / Committee / Footer。
- `css/style.css` — 样式。
- `js/main.js` — 移动端导航开关。
- `README.md` — 本地预览 + 部署说明。

## 当前状态（截至 2026-06-14）
- [x] 站点骨架 + 样式完成，本地可预览（`python3 -m http.server 8000`）。
- [x] 内容**暂用 HALO 2020 占位**，已在 HTML 里用 `PLACEHOLDER` / `TODO` 注释标记。
- [x] **已部署上线**到根域名：建组织 `iccad-2026` → 仓库 `iccad-2026.github.io` →
      push → Pages 自动开启 → 线上验证 HTTP 200。
- [x] git remote：`gh-pages`（正式，组织仓库）+ `origin`（旧项目仓库），
      凭证走 `gh auth setup-git`（账号 PopsicleTan）。

**🌐 线上地址：https://iccad-2026.github.io/**

## 下一步（待办）
1. **替换占位内容**为 ICCAD 2026 真实信息：日期、地点、scope、speakers、program、committee
   —— 在 `index.html` 里搜 `PLACEHOLDER` 和 `TODO`，以及 hero 区的日期/地点。
   （用户说内容待其确认后再给，按清单逐项替换。）
2. 可选：换 logo/favicon、加 registration/CFP 链接、加往届年份导航。
3. 日常更新流程：改完 `git add -A && git commit -m "..." && git push`，
   Pages 自动重建，约 1–2 分钟生效。

## 决策记录
- GitHub Pages 走 **项目页(project page)** 形式，URL 带 `/iccad-2026/` 路径，
  所以站内资源用相对路径（`css/...`、`js/...`），已确认无以 `/` 开头的绝对路径。
