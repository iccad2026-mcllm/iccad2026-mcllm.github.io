# 项目：ICCAD 2026 Workshop 静态网站

> 这份文件用于跨对话续接。下次在 `/home/tankaixin/program/web` 目录打开新会话，
> 说一句"继续之前的工作"，即可自动读到此文件并接着干。

## 目标
**GitHub Pages 静态会议网站**，正式上线地址（根域名形式，仿 iccad-halo.github.io）：

### 🌐 正式地址：https://iccad2026-mcllm.github.io/

> ⚠️ 网址历经多次改名（iccad-2026 → iccad2026 → **iccad2026-mcllm**）。当前唯一有效域名是
> **https://iccad2026-mcllm.github.io/**，旧的 iccad2026.github.io / iccad-2026.github.io 均已失效。
> 规则：每次在 GitHub 改**组织名**，必须把仓库也改成 `<组织名>.github.io` 配套，否则根域名 404。

样式/结构参考 [iccad-halo.github.io](https://iccad-halo.github.io)（ICCAD HALO Workshop 2020）。

## 仓库与部署架构（重要）

### ⭐ 站 A：精致版（根域名）—— 唯一在维护的站，主战场
- 本地目录：`/home/tankaixin/program/web`（就是本文件所在目录）。
- 仓库：`iccad2026-mcllm/iccad2026-mcllm.github.io`（**组织 iccad2026-mcllm** 名下，owner=PopsicleTan）。
- 可见性：**public（公开）**；组织套餐 free。Pages 从 main 根目录发布。
- remote 名 **`gh-pages`**。
- 风格：现代深蓝 + 卡片 + sticky 导航（`css/style.css` + `js/main.js`）。
- 🌐 **https://iccad2026.github.io/**
- 更新：在本目录改文件 → `git add -A && git commit -m "..." && git push gh-pages main`。

### 🧊 站 B：朴素复刻版 —— 【已冻结，不再修改/更新】
- 本地目录：`/home/tankaixin/program/web-plain`；仓库 `PopsicleTan/iccad-2026`（remote `origin`）。
- 内容：iccad-halo.github.io 的 100% 逐字节复刻（原 HTML + 10 张图片）。
- 🌐 https://popsicletan.github.io/iccad-2026/
- **状态：用户决定不再动它。** 后续所有工作只针对站 A，**不要**再推 `origin` / 改 `web-plain`。

### 能否设为 private（站 A）
- 免费组织套餐下，Pages 只能从 **public 仓库**发布；改 private 会导致网站下线。
- 想「源码私有 + 网站公开」需升级 **GitHub Team**（付费）；想「网站本身也私有」需 **Enterprise**。
- 现状保持 public。

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

**🌐 线上地址：https://iccad2026-mcllm.github.io/**

## 0618 后续微调（已上线）
- 标题方案4 + 副标题方案4（副标题文字现为「（副标题占位）」）。
- 节目表：**全部居中**，无右侧箭头（仍可点击弹窗）；结构 = Keynote → Session 1（3 talk）→ Break(15min) → Session 2（3 talk）。
- 讲者/节目姓名统一占位「（姓名占位）」（不再用 Wu Yifan）；单位「（占位大学）」。
- 组委会只剩 Organizers（Chenchen Liu / Xiaoxuan Yang）。
- 页脚仅「ICCAD 2026 Workshop」（已删赞助、删 ICAS Lab、删 GitHub 链接）。
- 已修复点击：CSS/JS 加 `?v=` 版本号清缓存（当前 v=20260618d）。
- 移动端响应式 + JS 检测移动 UA 打 `is-mobile` 类。

## 0618 更新已完成（站 A）
- 标题改为 **ICCAD 2026 Workshop: Memory-Centric Computing for LLM Inference**，
  「方案4 描边双色」特效（Righteous 字体，金填充+白描边+蓝投影），高亮 **ICCAD / M / C / LLM**
  （`.hero__title--fx .hl`，全大写）。
- 日期：Thursday, November 12, 2026；已删地点行；保留 eyebrow「Workshop · Co-located with ICCAD 2026」。
- General Information：换成 LLM / memory-centric computing 正式正文（英文两段，真实内容）。
- Preliminary Program：**可点击弹窗**（`.slot--link` + `#talkModal` + js/main.js），只到 Session 1，时间不变。
- Speakers / Key Topics / 部分 Committee：占位（姓名=Wu Yifan，单位=（占位大学），议题=（关键议题占位 N））。
- Organizing Committee 真实：Organizers = Chenchen Liu (Beihang University)、Xiaoxuan Yang (Virginia University)。
- 页脚：Sponsored by（赞助单位占位）；「Content from ICAS Lab」；已删 GitHub 链接。
- 占位头像：`images/wuyifan.svg`（临时）。

## 待办 / 待用户提供
1. **Wu Yifan 真实照片**：用户要用「pepe 人教版 wuyifan」照片，我无法自动获取。用户给图片文件后替换 `images/wuyifan.svg`。
2. 副标题 `Hardware and Algorithms for Learning On-a-chip` 仍是 HALO 占位，待新副标题。
3. 其余占位（议题×8、占位大学、报告标题、分会场主题、赞助单位等）待真实内容逐项替换。
4. 日常更新：在 `web` 目录改文件 → `git add -A && git commit -m "..." && git push gh-pages main`，约 1–2 分钟生效。

## 决策记录
- GitHub Pages 走 **项目页(project page)** 形式，URL 带 `/iccad-2026/` 路径，
  所以站内资源用相对路径（`css/...`、`js/...`），已确认无以 `/` 开头的绝对路径。
