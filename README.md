<div align="center">

<img src="assets/banner.svg" width="100%" alt="服务器项目清单">

<br>

### 🖥️ 服务器项目清单

[![Stars](https://img.shields.io/github/stars/dirjaker/server-projects?style=flat-square&label=Stars&color=FFD700)](https://github.com/dirjaker/server-projects/stargazers)
[![Forks](https://img.shields.io/github/forks/dirjaker/server-projects?style=flat-square&label=Forks&color=4A90D9)](https://github.com/dirjaker/server-projects/network/members)
[![Contributors](https://img.shields.io/github/contributors/dirjaker/server-projects?style=flat-square&label=Contributors&color=8B4513)](https://github.com/dirjaker/server-projects/graphs/contributors)
[![License](https://img.shields.io/github/license/dirjaker/server-projects?style=flat-square&label=License&color=20B2AA)](https://github.com/dirjaker/server-projects/blob/dev/LICENSE)

</div>

---

## ✨ 功能特性

| 功能 | 描述 |
|------|------|
| 📋 **项目清单** | 23 个项目的完整技术栈和状态总览 |
| 🔧 **部署指南** | 每个项目的安装、配置、运维文档 |
| 📊 **架构总览** | 服务器整体架构和项目间关系图 |
| 🔒 **安全配置** | 防火墙、SSL、反向代理等安全最佳实践 |
| 📈 **监控方案** | Prometheus + Grafana 监控体系 |
| 🔄 **自动化** | Shell 脚本自动化部署和维护 |


## 📖 在线文档

<div align="center">

**📚 [点击访问在线文档](https://dirjaker.github.io/server-projects/)**

</div>

## 📊 项目总览

### Web 应用（3个）

| 项目 | 功能 | 技术栈 |
|------|------|--------|
| **vestio** | 智慧衣橱系统：衣物管理、AI搭配推荐、通义千问VL图片分类 | Vue3 + FastAPI + PyTorch |
| **yolo-trainer** | YOLO 视觉模型训练平台（v5/v8/v9/v10） | Vue3 + FastAPI + PyTorch |
| **portfolio** | 个人作品集/项目展示网站 | FastAPI + SQLite + Jinja2 |

### VitePress 文档站点（6个）

| 项目 | 功能 | 在线文档 |
|------|------|----------|
| **ai-for-textile-procurement** | 纺织采购 AI 学习指南 | [访问](https://dirjaker.github.io/ai-for-textile-procurement/) |
| **llm_agent_interview** | LLM & Agent 面试题全集（21专题/380+题） | [访问](https://dirjaker.github.io/llm_agent_interview/) |
| **hermes-skill-guide** | Hermes Skill 开发指南 | [访问](https://dirjaker.github.io/hermes-skill-guide/) |
| **docker_learning** | Docker & K8s 学习笔记 | [访问](https://dirjaker.github.io/docker_learning/) |
| **langchain_learning** | LangChain + LangGraph 学习 | [访问](https://dirjaker.github.io/langchain_learning/) |
| **python_interview** | Python 面试题精讲 | [访问](https://dirjaker.github.io/python_interview/) |

### AI Agent 基础设施（7个）

| 项目 | 功能 | 技术栈 |
|------|------|--------|
| **agent_platform** | AI Agent 工具调用平台 | FastAPI + Pydantic |
| **agent_evaluator** | Agent 评估框架 | FastAPI + Pydantic |
| **agent_guardrails** | Agent 安全防护 | FastAPI + Pydantic |
| **agent_memory_system** | Agent 记忆系统 | FastAPI + SQLAlchemy |
| **multi_agent_crew** | 多智能体协作系统 | FastAPI + Pydantic |
| **workflow_engine** | AI 工作流编排引擎 | FastAPI + SQLAlchemy |
| **model-monitor** | 模型 API 监控工具 | FastAPI + SQLAlchemy |

### 工具与监控（6个）

| 项目 | 功能 | 技术栈 |
|------|------|--------|
| **model_deploy** | 本地模型部署与推理优化 | vLLM + Ollama |
| **api_doc_generator** | API 文档生成器 | FastAPI + Python AST |
| **docker_optimizer** | Docker 镜像优化器 | Click + Rich |
| **prompt_engineering** | Prompt 工程平台 | FastAPI + SQLAlchemy |
| **damai_monitor** | 大麦网票务监控 | Playwright + Android |
| **knowledge_graph** | 知识图谱系统 | FastAPI + Neo4j + D3.js |

## 🖥️ 服务器环境

| 项目 | 值 |
|------|-----|
| **操作系统** | Ubuntu 22.04 LTS (5.15.0-181-generic) |
| **Python** | 3.12.13 (Miniconda) |
| **内网 IP** | 192.168.31.100 |
| **公共 IP** | 223.167.62.86 |
| **反向代理** | frpc → 101.132.81.140:7000 |
| **包管理** | conda + pip (清华源) |

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/dirjaker/server-projects.git
cd server-projects

# 安装 Node.js 依赖
npm install

# 本地开发预览
npm run dev

# 构建生产版本
npm run build
```

## 📝 开发日志

- [x] 23 个项目文档
- [x] 部署指南编写
- [x] 架构总览图
- [x] GitHub Pages 部署
- [x] 安全配置指南
- [ ] 视频教程
- [ ] 一键部署脚本
- [ ] 自动化巡检

## 📄 许可证

[MIT License](LICENSE)

---

<div align="center">

🔗 **GitHub**: [dirjaker/server-projects](https://github.com/dirjaker/server-projects)

⭐ 如果这个项目对你有帮助，请给一个 Star 支持一下！

</div>
