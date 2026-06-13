# 项目：ICCAD 2026 Workshop 静态网站

> 这份文件用于跨对话续接。下次在 `/home/tankaixin/program/web` 目录打开新会话，
> 说一句"继续之前的工作"，即可自动读到此文件并接着干。

## 目标
为仓库 [PopsicleTan/iccad-2026](https://github.com/PopsicleTan/iccad-2026) 做一个
**GitHub Pages 静态会议网站**，上线地址将是
`https://popsicletan.github.io/iccad-2026/`。
样式/结构参考 [iccad-halo.github.io](https://iccad-halo.github.io)（ICCAD HALO Workshop 2020）。

## 技术选型
- 纯静态 HTML + CSS + 少量 JS，**无构建步骤**（最省心、GitHub Pages 直接托管）。
- `.nojekyll` 已加，按原样托管文件，不走 Jekyll。
- 单页结构，sticky 导航，深蓝(#0d2b4e)+蓝色点缀(#2f80ed)，响应式。

## 文件
- `index.html` — 单页，含 About / Topics / Speakers / Program / Committee / Footer。
- `css/style.css` — 样式。
- `js/main.js` — 移动端导航开关。
- `README.md` — 本地预览 + 部署说明。

## 当前状态（截至 2026-06-13）
- [x] 站点骨架 + 样式完成，本地可预览（`python3 -m http.server 8000`）。
- [x] 内容**暂用 HALO 2020 占位**，已在 HTML 里用 `PLACEHOLDER` / `TODO` 注释标记。
- [ ] 仓库 `iccad-2026` 当前为空，**尚未 git init / push / 开 Pages**。

## 下一步（待办）
1. **替换占位内容**为 ICCAD 2026 真实信息：日期、地点、scope、speakers、program、committee
   —— 在 `index.html` 里搜 `PLACEHOLDER` 和 `TODO`，以及 hero 区的日期/地点。
2. **部署**：`git init` → commit → push 到 `PopsicleTan/iccad-2026` →
   GitHub Settings → Pages → Source: `main` / root。详见 `README.md`。
3. 可选：换 logo/favicon、加 registration/CFP 链接、加往届年份导航。

## 决策记录
- GitHub Pages 走 **项目页(project page)** 形式，URL 带 `/iccad-2026/` 路径，
  所以站内资源用相对路径（`css/...`、`js/...`），已确认无以 `/` 开头的绝对路径。
