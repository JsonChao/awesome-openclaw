import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://aiopenclaw.app',
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    starlight({
      title: 'awesome openclaw | ai openclaw 教程与实战',
      description:
        'awesome openclaw 是面向 ai openclaw 的中文教程站，覆盖安装、模型、技能、自动化、安全与成本优化。',
      components: {
        Header: './src/components/SiteHeader.astro',
        Footer: './src/components/SiteFooter.astro',
        Head: './src/components/Head.astro',
      },
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      favicon: '/icon.svg',
      social: [
        {
          icon: 'twitter',
          label: 'X',
          href: 'https://x.com/JsonChao',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/JsonChao/',
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'keywords',
            content:
              'ai openclaw, awesome openclaw, openclaw 教程, ai 助手, 自托管 agent, openclaw 安装',
          },
        },
        {
          tag: 'meta',
          attrs: {
            name: 'robots',
            content: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
          },
        },
        {
          tag: 'meta',
          attrs: {
            property: 'og:locale',
            content: 'zh_CN',
          },
        },
      ],
      sidebar: [
        {
          label: '快速上手',
          items: [
            { slug: 'guide/start-here', label: '开始前必读' },
            { slug: 'guide/install/local', label: '本地安装' },
            { slug: 'guide/install/cloud', label: '云端部署' },
            { slug: 'guide/cost', label: '成本规划' },
          ],
        },
        {
          label: '核心能力',
          items: [
            { slug: 'guide/models', label: '模型与推理策略' },
            { slug: 'guide/integrations', label: '消息平台接入' },
            { slug: 'guide/skills', label: '技能市场与自定义技能' },
            { slug: 'guide/automation', label: '自动化与工作流' },
          ],
        },
        {
          label: '架构与安全',
          items: [
            { slug: 'guide/architecture/system-design', label: '系统架构' },
            { slug: 'guide/security', label: '安全总览' },
            { slug: 'faq/security/checklist', label: '安全检查清单' },
          ],
        },
        {
          label: 'FAQ',
          items: [
            { slug: 'faq/what-is-ai-openclaw', label: '什么是 ai openclaw' },
            { slug: 'faq/how-to-start-ai-openclaw', label: '如何开始' },
            { slug: 'faq/how-much-does-it-cost', label: '成本是多少' },
            { slug: 'faq/is-it-safe', label: '是否安全' },
            { slug: 'faq/how-to-run-24x7', label: '如何 24x7 运行' },
          ],
        },
        {
          label: '场景模板',
          items: [
            { slug: 'use-cases/content-team', label: '内容团队自动化' },
            { slug: 'use-cases/founder-assistant', label: '创业者个人助手' },
          ],
        },
        {
          label: '法律与合规',
          items: [
            { slug: 'privacy', label: '隐私政策' },
            { slug: 'terms', label: '使用条款' },
          ],
        },
      ],
      customCss: ['./src/styles/custom.css'],
    }),
    sitemap(),
  ],
});
