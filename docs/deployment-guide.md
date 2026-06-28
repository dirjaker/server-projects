# 部署指南

## 🚀 部署概述

本文档详细说明如何部署 server-projects 文档站点到 GitHub Pages，以及如何在服务器上部署各个项目。

## 📋 前置要求

### 本地环境

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git >= 2.30.0

### GitHub 配置

- GitHub 账户
- 仓库管理员权限
- GitHub Pages 已启用

## 🎯 GitHub Pages 部署

### 1. 自动部署（推荐）

项目已配置 GitHub Actions 自动部署，只需推送代码即可：

```bash
# 克隆仓库
git clone https://github.com/dirjaker/server-projects.git
cd server-projects

# 安装依赖
npm install

# 本地开发
npm run dev

# 推送代码触发自动部署
git add .
git commit -m "docs: 更新文档"
git push origin dev
```

**自动部署流程**：
1. 推送代码到 `dev` 分支
2. GitHub Actions 检测到变更
3. 自动构建 VitePress 站点
4. 部署到 GitHub Pages
5. 访问 https://dirjaker.github.io/server-projects/

### 2. 手动部署

如果需要手动部署：

```bash
# 构建生产版本
npm run build

# 构建产物位于 docs/.vitepress/dist/
# 可以手动上传到任意静态托管服务
```

### 3. GitHub Actions 配置

配置文件：`.github/workflows/deploy.yml`

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [dev]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
        run: npm ci
      - name: Build with VitePress
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 🖥️ 服务器部署

### 当前运行服务（4个）

| 服务 | 端口 | 启动命令 |
|------|:----:|----------|
| **Portfolio** | 10000 | `cd ~/myprojects/portfolio && conda run -n portfolio python backend/main.py` |
| **Vestio** | 10001 | `cd ~/myprojects/vestio/backend && conda run -n vestio python main.py` |
| **知识图谱** | 10002 | `cd ~/myprojects/knowledge_graph && conda run -n knowledge_graph python main.py` |
| **YOLO Trainer** | 10003 | `cd ~/myprojects/yolo-trainer/backend && JWT_SECRET_KEY=xxx conda run -n yolo-trainer python main.py` |

> 所有服务采用前后端合并部署（单端口），FastAPI 直接托管 Vue3 前端静态文件。

### 1. 环境准备

#### 安装 Miniconda

```bash
# 下载 Miniconda
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh

# 安装
bash Miniconda3-latest-Linux-x86_64.sh

# 初始化
source ~/.bashrc
```

#### 配置 Conda 环境

```bash
# 创建项目环境
conda create -n <project-name> python=3.12 -y

# 激活环境
conda activate <project-name>

# 安装依赖
pip install -r requirements.txt
```

### 2. 项目部署

#### FastAPI 项目部署

```bash
# 激活环境
conda activate <project-name>

# 进入项目目录
cd /home/dirjaker/myprojects/<project-name>

# 启动服务
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# 后台运行（生产环境）
nohup uvicorn main:app --host 0.0.0.0 --port 8000 > app.log 2>&1 &
```

#### Vue3 项目部署

```bash
# 进入前端目录
cd frontend

# 安装依赖
npm install

# 开发模式
npm run dev

# 构建生产版本
npm run build

# 部署到 Nginx
cp -r dist/* /var/www/html/
```

### 3. Nginx 配置

#### 基础配置

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # 静态资源
    location / {
        root /var/www/html;
        try_files $uri $uri/ /index.html;
    }

    # API 代理
    location /api/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }

    # WebSocket 支持
    location /ws/ {
        proxy_pass http://127.0.0.1:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

#### SSL 配置

```nginx
server {
    listen 443 ssl http2;
    server_name your-domain.com;

    ssl_certificate /etc/ssl/certs/your-domain.crt;
    ssl_certificate_key /etc/ssl/private/your-domain.key;

    # ... 其他配置
}
```

### 4. Systemd 服务配置

创建服务文件：`/etc/systemd/system/<project-name>.service`

```ini
[Unit]
Description=<Project Name> Service
After=network.target

[Service]
Type=simple
User=dirjaker
WorkingDirectory=/home/dirjaker/myprojects/<project-name>
Environment=PATH=/home/dirjaker/miniconda3/envs/<project-name>/bin:/usr/bin
ExecStart=/home/dirjaker/miniconda3/envs/<project-name>/bin/uvicorn main:app --host 0.0.0.0 --port 8000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
```

启用服务：

```bash
# 重新加载 systemd
sudo systemctl daemon-reload

# 启动服务
sudo systemctl start <project-name>

# 设置开机自启
sudo systemctl enable <project-name>

# 查看状态
sudo systemctl status <project-name>
```

## 🔧 环境变量配置

### 1. 创建 .env 文件

```bash
# 项目根目录
touch .env
```

### 2. 常用环境变量

```env
# 应用配置
APP_NAME=MyApp
APP_ENV=production
APP_DEBUG=false
APP_PORT=8000

# 数据库配置
DATABASE_URL=sqlite:///./app.db
# 或 PostgreSQL
# DATABASE_URL=postgresql://user:password@localhost/dbname

# 密钥配置
SECRET_KEY=your-secret-key-here
JWT_SECRET=your-jwt-secret-here

# API 密钥
OPENAI_API_KEY=sk-...
DEEPSEEK_API_KEY=sk-...

# 其他配置
CORS_ORIGINS=["http://localhost:3000"]
LOG_LEVEL=INFO
```

### 3. 环境变量加载

```python
# Python 项目
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    app_name: str = "MyApp"
    database_url: str = "sqlite:///./app.db"
    secret_key: str
    
    class Config:
        env_file = ".env"

settings = Settings()
```

## 📦 Docker 部署

### 1. Dockerfile 示例

```dockerfile
# Python 项目
FROM python:3.12-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

### 2. docker-compose.yml 示例

```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=sqlite:///./app.db
    volumes:
      - ./data:/app/data
    restart: unless-stopped

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped

  nginx:
    image: nginx:alpine
    ports:
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl
    depends_on:
      - frontend
      - backend
    restart: unless-stopped
```

### 3. Docker 命令

```bash
# 构建镜像
docker build -t myapp .

# 运行容器
docker run -d -p 8000:8000 --name myapp myapp

# 使用 docker-compose
docker-compose up -d

# 查看日志
docker-compose logs -f

# 停止服务
docker-compose down
```

## 🔐 安全配置

### 1. 防火墙配置

```bash
# 查看防火墙状态
sudo ufw status

# 允许 SSH
sudo ufw allow ssh

# 允许 HTTP/HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# 允许特定端口
sudo ufw allow 8000/tcp

# 启用防火墙
sudo ufw enable
```

### 2. SSL 证书

#### Let's Encrypt 免费证书

```bash
# 安装 certbot
sudo apt install certbot python3-certbot-nginx

# 获取证书
sudo certbot --nginx -d your-domain.com

# 自动续期
sudo certbot renew --dry-run
```

### 3. 安全头配置

```nginx
# Nginx 安全头
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
add_header Content-Security-Policy "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" always;
```

## 📊 监控与日志

### 1. 日志配置

```python
# Python 日志配置
import logging

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('app.log'),
        logging.StreamHandler()
    ]
)
```

### 2. 日志轮转

```bash
# logrotate 配置
/etc/logrotate.d/myapp {
    daily
    missingok
    rotate 14
    compress
    delaycompress
    notifempty
    create 0640 dirjaker dirjaker
}
```

### 3. 监控工具

```bash
# 系统监控
htop
iotop
nethogs

# 应用监控
supervisorctl status
systemctl status myapp
```

## 🔄 更新与维护

### 1. 代码更新

```bash
# 拉取最新代码
git pull origin dev

# 更新依赖
pip install -r requirements.txt --upgrade

# 重启服务
sudo systemctl restart myapp
```

### 2. 数据库迁移

```bash
# Alembic 迁移
alembic upgrade head

# 回滚迁移
alembic downgrade -1
```

### 3. 备份策略

```bash
# 数据库备份
sqlite3 app.db ".backup backup.db"

# 文件备份
tar -czf backup.tar.gz /path/to/data

# 自动备份脚本
0 2 * * * /path/to/backup.sh
```

## 🐛 故障排查

### 1. 常见问题

#### 端口被占用

```bash
# 查找占用端口的进程
lsof -i :8000

# 杀死进程
kill -9 <PID>
```

#### 权限问题

```bash
# 修改文件权限
chmod +x script.sh
chown -R dirjaker:dirjaker /path/to/project
```

#### 依赖冲突

```bash
# 重新创建环境
conda deactivate
conda env remove -n myenv
conda create -n myenv python=3.12 -y
conda activate myenv
pip install -r requirements.txt
```

### 2. 日志查看

```bash
# 应用日志
tail -f app.log

# 系统日志
journalctl -u myapp -f

# Nginx 日志
tail -f /var/log/nginx/access.log
tail -f /var/log/nginx/error.log
```

### 3. 性能调试

```bash
# Python 性能分析
python -m cProfile -o output.prof script.py

# 查看分析结果
python -c "import pstats; p = pstats.Stats('output.prof'); p.sort_stats('cumulative').print_stats()"
```

## 📚 参考资源

- [VitePress 官方文档](https://vitepress.dev/)
- [FastAPI 官方文档](https://fastapi.tiangolo.com/)
- [Vue.js 官方文档](https://vuejs.org/)
- [Nginx 官方文档](https://nginx.org/en/docs/)
- [Docker 官方文档](https://docs.docker.com/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)

---

📝 **文档版本**: v1.1.0  
📅 **最后更新**: 2026-06-22  
👨‍💻 **维护者**: dirjaker
