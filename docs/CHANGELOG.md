# 变更日志

所有重要变更都会记录在此文件中。格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)。

---

## [1.6.0] - 2026-06-28

### 变更
- **端口重新规划**: Portfolio(10000) / Vestio(10001) / 知识图谱(10002) / YOLO Trainer(10003)
- **yolo-trainer**: 前后端合并到单端口 :10003，移除独立前端进程
- **vestio**: 端口从 8001 迁移到 10001
- 更新 README、技术架构、部署指南

---

## [1.5.0] - 2026-06-22

### 新增
- 创建 `docs/DEVELOPMENT.md` 开发指南
- 创建 `docs/CHANGELOG.md` 变更日志（本文档）
- VitePress 导航栏新增开发指南和变更日志入口

### 变更
- 更新 README.md 项目统计信息和运行服务列表
- 更新 VitePress 文档首页时间至 2026-06-22
- 更新技术架构文档和部署指南日期

---

## [1.4.0] - 2026-06-15

### 变更
- 更新项目清单，VitePress 文档 6 个，应用项目 17 个
- `python_interview` 移至应用项目分类
- README 同步简化分类
- 添加最后更新时间标记

---

## [1.3.0] - 2026-06-14

### 新增
- 运行中服务状态展示（portfolio 端口 8000、vestio 端口 8001）
- 补充所有项目 GitHub 链接和最新描述
- 项目清单更新至 23 个

### 修复
- 主标题左侧留白增加到 60px
- 优化 banner 布局，副标题改为中文项目名
- 修复 banner 文字溢出，自适应字号

---

## [1.2.0] - 2026-06-14

### 新增
- SVG Banner 科技风格横幅
- MIT License 许可证

### 变更
- 统一 README 格式和风格
- 完善项目文档和技术架构

---

## [1.1.0] - 2026-06-14

### 新增
- VitePress 文档站点配置
- 技术架构文档 (`technical-architecture.md`)
- 部署指南 (`deployment-guide.md`)
- GitHub Actions 自动部署 (`deploy.yml`)
- 本地搜索支持（中文）

### 变更
- 完善项目文档结构

---

## [1.0.0] - 2026-06-14

### 新增
- 服务器项目清单 VitePress 文档站初始化
- 项目总览首页
- 23 个项目的完整信息
