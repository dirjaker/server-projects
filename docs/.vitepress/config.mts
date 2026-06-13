import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/server-projects/',
  title: 'Server Projects',
  description: '服务器项目清单',
  lang: 'zh-CN',
  themeConfig: {
    nav: [
      { text: '总览', link: '/' },
    ],
    sidebar: 'auto',
    search: { provider: 'local' },
    outline: { level: [2, 3], label: '目录' },
    lastUpdated: { text: '最后更新' },
  }
})
