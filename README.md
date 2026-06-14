# Server Projects

> 🖥️ Ubuntu 22.04 服务器项目清单与技术文档

[![VitePress](https://img.shields.io/badge/VitePress-1.6-blue?style=flat-square&logo=vitepress)](https://vitepress.dev/)
[![Ubuntu](https://img.shields.io/badge/Ubuntu-22.04-orange?style=flat-square&logo=ubuntu)](https://ubuntu.com/)
[![Python](https://img.shields.io/badge/Python-3.12-yellow?style=flat-square&logo=python)](https://python.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-green?style=flat-square&logo=fastapi)](https://fastapi.tiangolo.com/)
[![Vue.js](https://img.shields.io/badge/Vue.js-3-brightgreen?style=flat-square&logo=vuedotjs)](https://vuejs.org/)

## 📋 项目概述

本仓库记录了运行在 Ubuntu 22.04 服务器（192.168.31.100）上的 **22 个项目**，涵盖：

- 🤖 **AI Agent 基础设施** - 模型监控、Agent 平台、工作流引擎等
- 📚 **VitePress 文档站点** - 技术笔记与学习指南（GitHub Pages 部署）
- 🌐 **Web 应用** - 智能穿衣镜、面试题库、个人展示页等
- 🛠️ **工具与监控** - Docker 优化、API 文档生成、Prompt 工程等

## 🚀 在线访问

**文档站点**: [https://dirjaker.github.io/server-projects/](https://dirjaker.github.io/server-projects/)

## 📊 项目清单

### 应用项目

| 项目 | 功能 | 技术栈 | 状态 |
|------|------|--------|------|
| **vestio** | 智能穿衣镜：抠图、衣橱管理、天气穿搭推荐、AI插画 | Vue3 + FastAPI | ✅ 运行中 |
| **yolo-trainer** | YOLO视觉模型训练平台：v5/v8/v9/v10 | Vue3 + FastAPI + Celery | ✅ 就绪 |
| **python_interview** | Python面试题库平台 | FastAPI | ✅ 运行中 |
| **portfolio** | 个人展示页面：前台项目展示 + 后台管理 | FastAPI + Jinja2 | ✅ 就绪 |

### 笔记文档（VitePress + GitHub Pages）

| 项目 | 功能 | 在线链接 |
|------|------|----------|
| **ai-for-textile-procurement** | 纺织采购AI学习指南 | [访问](https://dirjaker.github.io/ai-for-textile-procurement/) |
| **llm_agent_interview** | LLM & Agent面试题库（27专题/450+题） | [访问](https://dirjaker.github.io/llm_agent_interview/) |
| **hermes-skill-guide** | Hermes Skill开发指南 | [访问](https://dirjaker.github.io/hermes-skill-guide/) |
| **docker_learning** | Docker学习笔记 | [访问](https://dirjaker.github.io/docker_learning/) |
| **langchain_learning** | LangChain学习 | [访问](https://dirjaker.github.io/langchain_learning/) |

### AI Agent 基础设施

| 项目 | 功能 | Web 界面 | macOS GUI |
|------|------|----------|-----------|
| **model-monitor** | 模型API监控（代理+嗅探双模式） | FastAPI仪表盘 | tkinter |
| **agent_platform** | 模块化AI Agent平台 | FastAPI仪表盘 | tkinter |
| **agent_evaluator** | Agent评估工具 | FastAPI仪表盘 | tkinter |
| **agent_guardrails** | Agent安全护栏 | FastAPI仪表盘 | tkinter |
| **agent_memory_system** | Agent记忆系统 | FastAPI仪表盘 | tkinter |
| **multi_agent_crew** | 多Agent协作编排 | FastAPI仪表盘 | tkinter |
| **workflow_engine** | DAG工作流引擎 | FastAPI仪表盘 | tkinter |

### 工具与监控

| 项目 | 功能 | Web 界面 | macOS GUI |
|------|------|----------|-----------|
| **model_deploy** | 模型部署工具（vLLM/TGI/Ollama） | FastAPI仪表盘 | tkinter |
| **api_doc_generator** | API文档生成器 | FastAPI仪表盘 | tkinter |
| **docker_optimizer** | Docker镜像优化 | FastAPI仪表盘 | tkinter |
| **prompt_engineering** | Prompt工程工具 | FastAPI仪表盘 | tkinter |
| **damai_monitor** | 大麦网票务监控 | FastAPI仪表盘 | tkinter |
| **knowledge_graph** | 知识图谱工具 | FastAPI仪表盘 | tkinter |

## 🛠️ 技术栈

### 后端
- **Python 3.12** - 主要开发语言
- **FastAPI** - 高性能 Web 框架
- **SQLAlchemy** - ORM 数据库操作
- **Celery** - 异步任务队列
- **vLLM / TGI / Ollama** - LLM 推理引擎

### 前端
- **Vue 3** - 渐进式 JavaScript 框架
- **VitePress** - 静态站点生成器
- **Jinja2** - 模板引擎
- **HTML/CSS/JavaScript** - 原生 Web 技术

### 基础设施
- **Ubuntu 22.04** - 服务器操作系统
- **Docker** - 容器化部署
- **Nginx** - 反向代理
- **GitHub Pages** - 静态站点托管
- **Conda** - Python 环境管理

## 📁 项目结构

```
server-projects/
├── .github/            # GitHub Actions 配置
├── docs/               # VitePress 文档源文件
│   ├── .vitepress/     # VitePress 配置
│   │   ├── config.mts  # 站点配置
│   │   └── dist/       # 构建产物
│   └── index.md        # 首页内容
├── node_modules/       # Node.js 依赖
├── .gitignore          # Git 忽略规则
├── package.json        # Node.js 项目配置
├── package-lock.json   # 依赖锁定文件
└── README.md           # 项目说明文档
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

访问 http://localhost:5173/server-projects/

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📦 部署

### GitHub Pages 自动部署

项目配置了 GitHub Actions 自动部署到 GitHub Pages：

1. 推送代码到 `dev` 分支
2. GitHub Actions 自动构建 VitePress 站点
3. 部署到 GitHub Pages

### 手动部署

```bash
# 构建
npm run build

# 部署 docs/.vitepress/dist 目录到任意静态托管服务
```

## 🔧 配置说明

### VitePress 配置

配置文件：`docs/.vitepress/config.mts`

```typescript
export default defineConfig({
  base: '/server-projects/',  # GitHub Pages 子路径
  title: 'Server Projects',
  description: '服务器项目清单',
  lang: 'zh-CN',
  // ... 更多配置
})
```

### GitHub Actions 配置

配置文件：`.github/workflows/deploy.yml`

- 触发条件：推送到 `dev` 分支
- 构建环境：Node.js 20
- 部署目标：GitHub Pages

## 📊 运行中的服务

| 端口 | 项目 | 说明 |
|------|------|------|
| 5173 | vestio | 智能穿衣镜前端 |
| 8000 | python_interview | Python面试题库API |

## 🔐 安全说明

- 本仓库为**私有仓库**，仅限授权用户访问
- 服务器位于内网（192.168.31.100），通过 frpc 穿透访问
- 所有项目使用 Conda 虚拟环境隔离依赖
- 敏感配置（API密钥、数据库密码）通过环境变量管理

## 📈 监控与维护

### 服务状态检查

```bash
# 检查所有项目状态
cd /home/dirjaker/myprojects
for dir in */; do
  if [ -d "$dir/.git" ]; then
    echo "=== $dir ==="
    cd "$dir"
    git status --short
    cd ..
  fi
done
```

### Conda 环境管理

```bash
# 列出所有环境
conda env list

# 激活项目环境
conda activate <project-name>

# 更新依赖
pip install -r requirements.txt --upgrade
```

## 🤝 贡献指南

1. 在 `dev` 分支上开发新功能
2. 更新 `docs/index.md` 添加新项目信息
3. 提交代码并推送到 GitHub
4. GitHub Actions 自动部署更新

## 📝 更新日志

### 2026-06-14
- 初始化项目文档
- 添加 22 个项目清单
- 配置 VitePress 站点
- 设置 GitHub Pages 自动部署

## 📄 许可证

本项目为私有项目，未经授权禁止访问和使用。

## 👨‍💻 作者

**dirjaker** - [GitHub](https://github.com/dirjaker)

---

🔗 **在线访问**: [https://dirjaker.github.io/server-projects/](https://dirjaker.github.io/server-projects/)
