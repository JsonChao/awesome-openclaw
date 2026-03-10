# 🪼 awesome openclaw
从零开始，7天掌握你的 AI 私人助理 | The open-source guide to OpenClaw

🌐 在线访问 · 📚 浏览全部资源 · 📖 飞书知识库

## ✨ 什么是 awesome openclaw？
awesome openclaw 是一个面向 ai openclaw 的中文教程与资源聚合站，帮助团队与个人快速理解、部署和持续运营 OpenClaw，并建立可复用的学习与实践路径。

## 🎯 核心功能
- 📚 资源聚合 — 收录来自阿里云、腾讯云、DigitalOcean、B站等平台的优质教程与实践
- 📅 7天学习路径 — 从认识到进阶的系统化学习指南
- 🧩 技能推荐 — 按场景分类的 AI 技能与工具推荐
- 🌍 中英双语 — 同时收录中文与英文资源
- 🔍 筛选搜索 — 按分类、语言、关键词快速定位内容

## 📋 收录来源
| 来源 | 类型 |
| --- | --- |
| 阿里云 | 钉钉接入、企业微信 AppFlow |
| 腾讯云 | 飞书接入、企业微信接入 |
| DigitalOcean | 一键部署、概览介绍 |
| Hostinger | VPS 部署教程 |
| Codecademy | 结构化安装教程 |
| IBM Think | 深度分析文章 |
| B站 (Bilibili) | 视频教程 |
| 博客园 / CSDN | 飞书/Telegram 对接 |
| Reddit | 完整指南、技能分享 |
| 更多... | 持续收录中 |

## 🚀 快速开始
```bash
# 克隆仓库
git clone https://github.com/JsonChao/awesome-openclaw.git
cd awesome-openclaw

# 安装依赖
npm install --cache .npm-cache

# 本地开发
npm run dev

# 构建
npm run build
```

## 📁 项目结构
```
src/
├── content/
│   └── docs/                # Starlight 文档内容
├── components/
│   ├── SiteHeader.astro      # 全站导航栏
│   └── SiteFooter.astro      # 全站页脚
├── pages/
│   └── index.astro           # 首页
└── styles/
    └── custom.css            # 全局样式
public/
├── icon.svg                  # 站点图标
└── images/                   # 首页装饰图
```

## 🤝 如何贡献
### 添加新资源
1. Fork 本仓库
2. 在对应文档页面中补充资源链接
3. 提交 PR 并附简短说明

### 其他贡献方式
- 🐛 报告 Bug — 创建 Issue
- 💡 功能建议 — 创建 Issue
- 🌐 改进翻译 — 欢迎 PR
- 📝 改进内容 — 欢迎 PR

## 🛠 技术栈
- Astro + Starlight
- Tailwind CSS
- Pagefind（站内搜索）
- Cloudflare Pages / Vercel（可选部署）

## ☁️ Cloudflare Pages 部署（无报错版）
这个项目是**静态站**，不需要在 CI 里执行 `astro add cloudflare`。

Cloudflare Pages 推荐配置：
- Framework preset: `None`
- Build command: `npm run build:cf`
- Build output directory: `dist`
- Node.js version: `20`（或更高）

如果你用 Wrangler 手动部署：
```bash
npm run build:cf
npm run deploy:cf
```

## 📄 许可证
MIT License — 自由使用、修改和分发。

## 🙏 致谢
- OpenClaw — 开源 AI 助理平台
- Peter Steinberger — OpenClaw 创建者
- 所有教程作者和内容创作者
