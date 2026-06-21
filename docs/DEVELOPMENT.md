# 开发指南

## 📋 项目概述

**server-projects** 是服务器上所有项目的清单管理仓库，使用 VitePress 构建在线文档站点，通过 GitHub Actions 自动部署到 GitHub Pages。

## 🏗️ 项目结构

```
server-projects/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions 自动部署配置
├── assets/
│   └── banner.svg              # README 横幅图片
├── docs/
│   ├── .vitepress/
│   │   ├── config.mts          # VitePress 站点配置
│   │   └── dist/               # 构建产物（已 gitignore）
│   ├── index.md                # 文档首页
│   ├── technical-architecture.md  # 技术架构文档
│   ├── deployment-guide.md     # 部署指南
│   ├── DEVELOPMENT.md          # 开发指南（本文档）
│   └── CHANGELOG.md            # 变更日志
├── .gitignore
├── LICENSE                     # MIT 许可证
├── package.json                # Node.js 依赖配置
├── package-lock.json
├── requirements.txt            # Python 依赖（当前为空）
└── README.md                   # 项目说明
```

## 🔧 开发环境搭建

### 前置要求

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git** >= 2.30.0

### 安装依赖

```bash
# 克隆仓库
git clone https://github.com/dirjaker/server-projects.git
cd server-projects

# 安装 Node.js 依赖
npm install
```

### 本地开发

```bash
# 启动 VitePress 开发服务器（支持热更新）
npm run dev

# 访问 http://localhost:5173/server-projects/
```

### 构建与预览

```bash
# 构建生产版本
npm run build

# 本地预览生产构建
npm run preview
```

## 📝 文档编写规范

### 文件命名

- 使用小写字母和连字符（kebab-case）
- 示例：`deployment-guide.md`、`technical-architecture.md`

### Markdown 规范

- 所有文档使用**中文**编写
- 标题使用 emoji 前缀增强可读性
- 代码块需标注语言类型
- 表格对齐，保持整洁

### VitePress Frontmatter

```yaml
---
layout: home          # 首页布局
title: 页面标题       # 可选，覆盖默认标题
---
```

## 🔄 Git 工作流

### 分支策略

| 分支 | 用途 |
|------|------|
| `dev` | 主要开发分支，推送后自动部署到 GitHub Pages |
| `main` | 稳定版本分支 |
| `feature/*` | 功能开发分支 |

### 提交规范

遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>: <description>
```

常用类型：

| 类型 | 说明 | 示例 |
|------|------|------|
| `feat` | 新功能 | `feat: 添加项目统计页面` |
| `fix` | 修复 | `fix: 修复 banner 文字溢出` |
| `docs` | 文档 | `docs: 更新部署指南` |
| `chore` | 杂项 | `chore: 更新项目清单` |

### 提交示例

```bash
git add .
git commit -m "docs: 更新开发指南"
git push origin dev
```

## 🚀 部署流程

### 自动部署

1. 推送代码到 `dev` 分支
2. GitHub Actions 自动触发构建
3. VitePress 编译 `docs/` 目录
4. 构建产物上传到 GitHub Pages
5. https://dirjaker.github.io/server-projects/ 自动更新

### 手动部署

```bash
# 本地构建
npm run build

# 构建产物位于 docs/.vitepress/dist/
# 可手动上传到任意静态托管服务
```

## 📌 维护清单

### 添加新项目

1. 编辑 `README.md`，在对应分类表格中添加项目信息
2. 编辑 `docs/index.md`，同步更新项目列表
3. 更新 `docs/CHANGELOG.md`，记录变更
4. 提交并推送到 `dev` 分支

### 更新项目状态

1. 更新 `README.md` 中运行服务表格
2. 同步更新 `docs/index.md` 中运行服务信息
3. 提交变更

### 新增文档页面

1. 在 `docs/` 目录创建新的 `.md` 文件
2. 编辑 `docs/.vitepress/config.mts`，添加导航和侧边栏配置
3. 更新 `CHANGELOG.md`

---

📝 **文档版本**: v1.0.0  
📅 **最后更新**: 2026-06-22  
👨‍💻 **维护者**: dirjaker
