---
layout: home
hero:
  name: Server Projects
  text: 服务器项目清单
  tagline: Ubuntu 22.04 (192.168.31.100) | 23 个项目 | 2026年6月
---

> 最后更新：2026-06-28

## 🟢 运行中的服务（4个）

| 服务 | 端口 | 地址 | 功能 |
|------|:----:|------|------|
| **Portfolio** | 10000 | http://192.168.31.100:10000 | 个人作品集展示网站 |
| **Vestio** | 10001 | http://192.168.31.100:10001 | 衣物管理 + AI 搭配推荐 |
| **knowledge_graph** | 10002 | http://192.168.31.100:10002 | D3.js 可视化知识图谱 |
| **YOLO Trainer** | 10003 | http://192.168.31.100:10003 | YOLO 视觉模型训练平台 |

> 所有服务采用前后端合并部署（单端口），FastAPI 直接托管 Vue3 前端静态文件。

## VitePress 文档

通过 GitHub Pages 自动部署的在线文档：

| 项目 | 功能描述 | 在线文档 |
|------|----------|----------|
| **[llm_agent_interview](https://github.com/dirjaker/llm_agent_interview)** | LLM & Agent 面试题全集（47专题/600+题/82000+行） | [在线访问](https://dirjaker.github.io/llm_agent_interview/) |
| **[ai-for-textile-procurement](https://github.com/dirjaker/ai-for-textile-procurement)** | 纺织采购 AI 学习指南与面试题库 | [在线访问](https://dirjaker.github.io/ai-for-textile-procurement/) |
| **[langchain_learning](https://github.com/dirjaker/langchain_learning)** | LangChain + LangGraph + Pydantic AI + LangSmith 学习 | [在线访问](https://dirjaker.github.io/langchain_learning/) |
| **[hermes-skill-guide](https://github.com/dirjaker/hermes-skill-guide)** | Hermes Skill 开发指南 | [在线访问](https://dirjaker.github.io/hermes-skill-guide/) |
| **[docker_learning](https://github.com/dirjaker/docker_learning)** | Docker & Kubernetes 从零到实战 | [在线访问](https://dirjaker.github.io/docker_learning/) |
| **[server-projects](https://github.com/dirjaker/server-projects)** | 服务器项目清单（本项目） | [在线访问](https://dirjaker.github.io/server-projects/) |

## 应用项目

| 项目 | 功能描述 | 技术栈 | GitHub |
|------|----------|--------|--------|
| **[vestio](https://github.com/dirjaker/vestio)** (:10001) | 智慧衣橱系统：衣物管理、AI搭配推荐、通义千问VL图片分类 | Vue3 + FastAPI + PyTorch | [仓库](https://github.com/dirjaker/vestio) |
| **[yolo-trainer](https://github.com/dirjaker/yolo-trainer)** (:10003) | YOLO 视觉模型训练平台（v5/v8/v9/v10） | Vue3 + FastAPI + PyTorch | [仓库](https://github.com/dirjaker/yolo-trainer) |
| **[portfolio](https://github.com/dirjaker/portfolio)** (:10000) | 个人作品集/项目展示网站（前台展示+后台管理+主题系统） | FastAPI + SQLite + Jinja2 | [仓库](https://github.com/dirjaker/portfolio) |
| **[knowledge_graph](https://github.com/dirjaker/knowledge_graph)** (:10002) | 知识图谱：LLM实体/关系抽取、D3.js可视化、智能查询、图谱分析 | FastAPI + SQLite + D3.js + Vue3 | [仓库](https://github.com/dirjaker/knowledge_graph) |
| **[agent_platform](https://github.com/dirjaker/agent_platform)** | 类Dify LLM应用平台：应用管理、知识库RAG、工作流编排、工具市场 | FastAPI + SQLite + Vue3 | [仓库](https://github.com/dirjaker/agent_platform) |
| **[agent_evaluator](https://github.com/dirjaker/agent_evaluator)** | Agent 评估框架：5维指标、自动化测试、A/B对比 | FastAPI + Pydantic | [仓库](https://github.com/dirjaker/agent_evaluator) |
| **[agent_guardrails](https://github.com/dirjaker/agent_guardrails)** | Agent 安全防护：输入验证、PII脱敏、速率限制、审计日志 | FastAPI + Pydantic | [仓库](https://github.com/dirjaker/agent_guardrails) |
| **[agent_memory_system](https://github.com/dirjaker/agent_memory_system)** | Agent 记忆系统：分层记忆、向量检索、记忆压缩与衰减 | FastAPI + SQLAlchemy | [仓库](https://github.com/dirjaker/agent_memory_system) |
| **[multi_agent_crew](https://github.com/dirjaker/multi_agent_crew)** | 多智能体协作系统：3种协作模式、LLM驱动决策 | FastAPI + Pydantic | [仓库](https://github.com/dirjaker/multi_agent_crew) |
| **[workflow_engine](https://github.com/dirjaker/workflow_engine)** | AI 工作流编排引擎：DAG调度、7种节点、条件分支、并行执行 | FastAPI + SQLAlchemy | [仓库](https://github.com/dirjaker/workflow_engine) |
| **[model-monitor](https://github.com/dirjaker/model-monitor)** | 模型 API 监控：代理转发、流量分析、费用追踪、告警 | FastAPI + SQLAlchemy | [仓库](https://github.com/dirjaker/model-monitor) |
| **[model_deploy](https://github.com/dirjaker/model_deploy)** | 本地模型部署与推理优化：量化、vLLM、OpenAI兼容API | vLLM + Ollama | [仓库](https://github.com/dirjaker/model_deploy) |
| **[api_doc_generator](https://github.com/dirjaker/api_doc_generator)** | API 文档生成器：AST代码解析、多格式输出、在线预览 | FastAPI + Python AST | [仓库](https://github.com/dirjaker/api_doc_generator) |
| **[docker_optimizer](https://github.com/dirjaker/docker_optimizer)** | Docker 镜像优化器：层分析、问题检测、Dockerfile重写 | Click + Rich | [仓库](https://github.com/dirjaker/docker_optimizer) |
| **[python_interview](https://github.com/dirjaker/python_interview)** | Python 面试题精讲（魔法方法/装饰器/异步/设计模式） | Python + pytest | [仓库](https://github.com/dirjaker/python_interview) |
| **[prompt_engineering](https://github.com/dirjaker/prompt_engineering)** | Prompt 工程平台：模板管理、版本控制、A/B测试、评估引擎、Web界面 | FastAPI + SQLite + Vue3 | [仓库](https://github.com/dirjaker/prompt_engineering) |
| **[damai_monitor](https://github.com/dirjaker/damai_monitor)** | 大麦网票务监控：实时监控、有票提醒、Chrome+Android双模式 | Playwright + Android | [仓库](https://github.com/dirjaker/damai_monitor) |

## 项目统计

| 分类 | 数量 | 说明 |
|------|------|------|
| VitePress 文档 | 6 | 自动部署到 GitHub Pages |
| 应用项目 | 17 | FastAPI / Vue3 / Python |
| 运行中服务 | 4 | 端口 10000-10003 |
| **合计** | **23** | |

## 端口规划

| 端口 | 服务 | 状态 |
|:----:|------|:----:|
| 10000 | Portfolio | 🟢 运行中 |
| 10001 | Vestio | 🟢 运行中 |
| 10002 | knowledge_graph | 🟢 运行中 |
| 10003 | YOLO Trainer | 🟢 运行中 |
| 10004-10009 | 预留扩展 | ⚪ |

## 文档导航

| 文档 | 说明 |
|------|------|
| [项目总览](/) | 23 个项目清单、运行状态、技术栈总览 |
| [技术架构](/technical-architecture) | 系统架构、技术栈详解、架构模式、数据流 |
| [部署指南](/deployment-guide) | GitHub Pages 部署、服务器部署、Docker 部署、安全配置 |
| [开发指南](/DEVELOPMENT) | 本地开发环境搭建、文档编写规范、Git 工作流 |
| [变更日志](/CHANGELOG) | 版本变更记录 |

## 技术栈总览

| 技术 | 用途 | 涉及项目数 |
|------|------|-----------|
| **Python 3.12** | 主要开发语言 | 23 |
| **FastAPI** | REST API 框架 | 17 |
| **Vue 3** | 前端框架 | 4 |
| **VitePress** | 文档站点生成器 | 6 |
| **SQLite** | 轻量数据库 | 18 |
| **D3.js** | 图谱可视化 | 1 |
| **PyTorch** | 深度学习框架 | 3 |
| **Docker** | 容器化部署 | 全部 |

## 服务器环境

| 项目 | 值 |
|------|-----|
| **操作系统** | Ubuntu 22.04 LTS |
| **内核版本** | 5.15.0-181-generic |
| **Python 版本** | 3.12.13 (Miniconda) |
| **服务器 IP** | 192.168.31.100 (内网) |
| **公共 IP** | 223.167.62.86 |
| **反向代理** | frpc → 101.132.81.140:7000 |
| **代理工具** | ShellCrash v1.9.4 |
| **包管理** | conda + pip (清华源) |
