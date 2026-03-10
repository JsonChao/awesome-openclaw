import fs from 'node:fs';
import path from 'node:path';

const root = '/Users/a1/Documents/cursor-project/awesome-openclaw/src/content/docs';
const iconUrl = 'https://aiopenclaw.app/icon.svg';

const descTemplate = (topic) =>
  `本页聚焦${topic}，说明关键概念、前置条件、操作步骤与常见坑位，并给出可复用清单与建议，帮助你在 ai openclaw 项目中快速落地、稳定运行与持续优化。适合从零开始或已上线的团队使用，包含验证方法、配置要点、风险提示、里程碑规划与后续迭代方向，也适合培训新人和统一团队标准。`;

const pages = {
  'guide/start-here.md': {
    title: 'ai openclaw 启动路线图与落地清单（目标与指标） | awesome openclaw 教程',
    topic: '启动路线图与落地清单',
    canonical: 'https://aiopenclaw.app/guide/start-here/',
  },
  'guide/install/local.md': {
    title: 'ai openclaw 本地安装与环境配置全流程 | awesome openclaw 教程',
    topic: '本地安装与环境配置',
    canonical: 'https://aiopenclaw.app/guide/install/local/',
  },
  'guide/install/cloud.md': {
    title: 'ai openclaw 云端部署与成本控制实战 | awesome openclaw 教程',
    topic: '云端部署与成本控制',
    canonical: 'https://aiopenclaw.app/guide/install/cloud/',
  },
  'guide/cost.md': {
    title: 'ai openclaw 成本规划与预算控制指南 | awesome openclaw 教程',
    topic: '成本规划与预算控制',
    canonical: 'https://aiopenclaw.app/guide/cost/',
  },
  'guide/models.md': {
    title: 'ai openclaw 模型选择与推理策略详解 | awesome openclaw 教程',
    topic: '模型选择与推理策略',
    canonical: 'https://aiopenclaw.app/guide/models/',
  },
  'guide/integrations.md': {
    title: 'ai openclaw 消息平台接入与机器人配置 | awesome openclaw 教程',
    topic: '消息平台接入与机器人配置',
    canonical: 'https://aiopenclaw.app/guide/integrations/',
  },
  'guide/skills.md': {
    title: 'ai openclaw 技能市场与自定义技能开发 | awesome openclaw 教程',
    topic: '技能市场与自定义技能开发',
    canonical: 'https://aiopenclaw.app/guide/skills/',
  },
  'guide/automation.md': {
    title: 'ai openclaw 自动化与工作流编排实践 | awesome openclaw 教程',
    topic: '自动化与工作流编排',
    canonical: 'https://aiopenclaw.app/guide/automation/',
  },
  'guide/architecture/system-design.md': {
    title: 'ai openclaw 系统架构与模块协作解析 | awesome openclaw 教程',
    topic: '系统架构与模块协作',
    canonical: 'https://aiopenclaw.app/guide/architecture/system-design/',
  },
  'guide/security.md': {
    title: 'ai openclaw 安全基线与风险防护清单 | awesome openclaw 教程',
    topic: '安全基线与风险防护',
    canonical: 'https://aiopenclaw.app/guide/security/',
  },
  'faq/what-is-ai-openclaw.md': {
    title: '什么是 ai openclaw：概念、能力与场景 | awesome openclaw 教程',
    topic: '概念、能力与应用场景',
    canonical: 'https://aiopenclaw.app/faq/what-is-ai-openclaw/',
  },
  'faq/how-to-start-ai-openclaw.md': {
    title: '如何开始 ai openclaw：从准备到上线 | awesome openclaw 教程',
    topic: '从准备到上线的完整流程',
    canonical: 'https://aiopenclaw.app/faq/how-to-start-ai-openclaw/',
  },
  'faq/how-much-does-it-cost.md': {
    title: 'ai openclaw 成本是多少：算力、API与运维 | awesome openclaw 教程',
    topic: '算力、API 与运维成本评估',
    canonical: 'https://aiopenclaw.app/faq/how-much-does-it-cost/',
  },
  'faq/is-it-safe.md': {
    title: 'ai openclaw 是否安全：权限、数据与合规要点 | awesome openclaw 教程',
    topic: '安全与合规关键要点',
    canonical: 'https://aiopenclaw.app/faq/is-it-safe/',
  },
  'faq/how-to-run-24x7.md': {
    title: 'ai openclaw 如何 24x7 运行：稳定性与监控 | awesome openclaw 教程',
    topic: '稳定性、可用性与监控体系',
    canonical: 'https://aiopenclaw.app/faq/how-to-run-24x7/',
  },
  'faq/security/checklist.md': {
    title: 'ai openclaw 安全检查清单：上线前必做项 | awesome openclaw 教程',
    topic: '上线前安全检查清单',
    canonical: 'https://aiopenclaw.app/faq/security/checklist/',
  },
  'use-cases/content-team.md': {
    title: 'ai openclaw 内容团队自动化方案与流程模板 | awesome openclaw 教程',
    topic: '内容团队自动化方案与流程模板',
    canonical: 'https://aiopenclaw.app/use-cases/content-team/',
  },
  'use-cases/founder-assistant.md': {
    title: 'ai openclaw 创业者个人助手方案与工作流 | awesome openclaw 教程',
    topic: '创业者个人助手方案与工作流',
    canonical: 'https://aiopenclaw.app/use-cases/founder-assistant/',
  },
  'privacy.md': {
    title: 'awesome openclaw 隐私政策与数据处理说明 | ai openclaw',
    topic: '隐私政策与数据处理说明',
    canonical: 'https://aiopenclaw.app/privacy/',
  },
  'terms.md': {
    title: 'awesome openclaw 使用条款与责任边界 | ai openclaw',
    topic: '使用条款与责任边界',
    canonical: 'https://aiopenclaw.app/terms/',
  },
};

for (const [rel, meta] of Object.entries(pages)) {
  const filePath = path.join(root, rel);
  const body = fs.readFileSync(filePath, 'utf8');
  const content = body.replace(/^---[\s\S]*?---\n?/, '').trimStart();
  const description = descTemplate(meta.topic);
  const frontmatter = [
    '---',
    `title: ${meta.title}`,
    `description: ${description}`,
    'head:',
    '  - tag: link',
    '    attrs:',
    '      rel: canonical',
    `      href: ${meta.canonical}`,
    '  - tag: meta',
    '    attrs:',
    '      property: og:title',
    `      content: ${meta.title}`,
    '  - tag: meta',
    '    attrs:',
    '      property: og:url',
    `      content: ${meta.canonical}`,
    '  - tag: meta',
    '    attrs:',
    '      property: og:description',
    `      content: ${description}`,
    '  - tag: meta',
    '    attrs:',
    '      property: og:image',
    `      content: ${iconUrl}`,
    '---',
    '',
  ].join('\n');

  fs.writeFileSync(filePath, frontmatter + content + '\n');
}
