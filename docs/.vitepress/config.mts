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
          ]
        },
        {
          text: '应用项目',
          items: [
            { text: 'vestio - 智慧衣橱', link: '/#web-应用项目' },
            { text: 'yolo-trainer - YOLO训练', link: '/#web-应用项目' },
            { text: 'portfolio - 作品集', link: '/#web-应用项目' },
          ]
        },
        {
          text: 'AI Agent 基础设施',
          items: [
            { text: 'agent_platform - Agent平台', link: '/#ai-agent-基础设施' },
            { text: 'agent_evaluator - 评估框架', link: '/#ai-agent-基础设施' },
            { text: 'agent_guardrails - 安全防护', link: '/#ai-agent-基础设施' },
            { text: 'agent_memory_system - 记忆系统', link: '/#ai-agent-基础设施' },
            { text: 'multi_agent_crew - 多Agent协作', link: '/#ai-agent-基础设施' },
            { text: 'workflow_engine - 工作流引擎', link: '/#ai-agent-基础设施' },
            { text: 'model-monitor - 模型监控', link: '/#ai-agent-基础设施' },
          ]
        },
        {
          text: '工具与监控',
          items: [
            { text: 'model_deploy - 模型部署', link: '/#工具与监控' },
            { text: 'api_doc_generator - 文档生成', link: '/#工具与监控' },
            { text: 'docker_optimizer - Docker优化', link: '/#工具与监控' },
            { text: 'prompt_engineering - Prompt工程', link: '/#工具与监控' },
            { text: 'damai_monitor - 票务监控', link: '/#工具与监控' },
            { text: 'knowledge_graph - 知识图谱', link: '/#工具与监控' },
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
