import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/server-projects/',
  title: 'Server Projects',
  description: '服务器项目清单 - Ubuntu 22.04 上的 23 个项目',
  lang: 'zh-CN',
  
  head: [
    ['meta', { name: 'author', content: 'dirjaker' }],
    ['meta', { name: 'keywords', content: 'server, ubuntu, vitepress, ai-agent, fastapi, vue3, python, devops, monitoring, documentation' }],
    ['meta', { property: 'og:title', content: 'Server Projects - 服务器项目清单' }],
    ['meta', { property: 'og:description', content: 'Ubuntu 22.04 服务器上的 23 个项目：AI Agent 基础设施、VitePress 文档站点、Web 应用、监控工具' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://dirjaker.github.io/server-projects/' }],
  ],
  
  themeConfig: {
    nav: [
      { text: '总览', link: '/' },
      { text: '技术架构', link: '/technical-architecture' },
      { text: '部署指南', link: '/deployment-guide' },
      { text: '开发指南', link: '/DEVELOPMENT' },
      { text: '变更日志', link: '/CHANGELOG' },
      { text: 'GitHub', link: 'https://github.com/dirjaker/server-projects' },
    ],
    
    sidebar: {
      '/': [
        {
          text: '项目文档',
          items: [
            { text: '项目总览', link: '/' },
            { text: '技术架构', link: '/technical-architecture' },
            { text: '部署指南', link: '/deployment-guide' },
            { text: '开发指南', link: '/DEVELOPMENT' },
            { text: '变更日志', link: '/CHANGELOG' },
          ]
        },
        {
          text: 'VitePress 文档',
          items: [
            { text: 'ai-for-textile-procurement', link: '/#vitpress-文档' },
            { text: 'llm_agent_interview', link: '/#vitpress-文档' },
            { text: 'hermes-skill-guide', link: '/#vitpress-文档' },
            { text: 'docker_learning', link: '/#vitpress-文档' },
            { text: 'langchain_learning', link: '/#vitpress-文档' },
            { text: 'python_interview', link: '/#vitpress-文档' },
          ]
        },
        {
          text: '应用项目',
          items: [
            { text: 'vestio · yolo-trainer · portfolio', link: '/#应用项目' },
            { text: 'Agent 系列 (7个)', link: '/#应用项目' },
            { text: '工具系列 (6个)', link: '/#应用项目' },
          ]
        }
      ]
    },
    
    search: { 
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    },
    
    outline: { 
      level: [2, 3], 
      label: '目录' 
    },
    
    lastUpdated: { 
      text: '最后更新' 
    },
    
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dirjaker/server-projects' }
    ],
    
    footer: {
      message: '基于 MIT 许可发布',
      copyright: 'Copyright © 2024-2026 dirjaker'
    }
  }
})
