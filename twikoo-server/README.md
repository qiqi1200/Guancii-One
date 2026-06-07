# Twikoo Server

Twikoo 评论系统的后端服务。Twikoo 是一个轻量、隐私友好的评论系统，所有数据自托管。

## 方案一：部署到 Vercel（推荐，免费）

### 1. 准备仓库
把这个目录的内容推到一个独立的 GitHub 仓库：

```bash
cd D:\blog\twikoo-server
git init
git add .
git commit -m "init: twikoo server"
git branch -M main
git remote add origin https://github.com/<your-name>/twikoo-server.git
git push -u origin main
```

### 2. 部署
1. 打开 [vercel.com](https://vercel.com)，登录
2. 点击 `Add New Project`
3. Import 刚才推上去的仓库
4. 保持默认设置，直接 Deploy
5. 部署完成后会得到一个 URL，类似 `https://twikoo-server-xxx.vercel.app`

### 3. 配置环境变量（可选）
Vercel Dashboard → 你的项目 → Settings → Environment Variables

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `MONGODB_URI` | MongoDB 连接串 | 内置 Vercel KV（如果用的话） |
| `TWIKOO_ADMIN_PASS` | 管理后台密码 | （留空首次访问会提示设置） |

> 💡 首次部署时 Twikoo 会用临时存储，**评论会丢**。生产环境建议配置 MongoDB（[MongoDB Atlas 免费版](https://www.mongodb.com/cloud/atlas)）。

### 4. 启用管理后台
部署完成后访问：
```
https://<your-app>.vercel.app/admin/
```
首次会要求设置管理员密码。

## 方案二：本地运行

```bash
cd D:\blog\twikoo-server
npm install
npm install express cors
node index.js
```

会启动在 `http://localhost:8080`。

**注意**：本地服务无法被公网访问，只适合开发调试。生产环境必须用 Vercel 或其他云服务。

## 配置博客前端

部署完成后，把得到的 URL 填到 `D:\blog\src\site.json`：

```json
{
  "twikoo": {
    "enabled": true,
    "envId": "https://twikoo-server-xxx.vercel.app",
    ...
  }
}
```

然后重新构建并部署博客：

```bash
cd D:\blog
npm run build
git add . && git commit -m "feat: 配置 twikoo" && git push
```

## 数据存储

Twikoo 默认使用 Vercel KV（部署即用），但有数据丢失风险。

生产环境建议：
1. 注册 [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)（免费 512MB）
2. 创建 Cluster，获取连接串
3. 在 Vercel 环境变量里加 `MONGODB_URI=mongodb+srv://...`
4. 重新部署

## API 文档

Twikoo 兼容以下事件：
- `GET_COMMENT_COUNT` - 获取评论数
- `GET_RECENT_COMMENTS` - 获取最新评论
- `COMMENT_GET` - 获取评论列表
- `COMMENT_INSERT` - 发表评论
- `COMMENT_DELETE` - 删除评论
- `COMMENT_UPDATE` - 更新评论
- `COMMENT_LIKE` - 点赞评论
- `LOGIN` - 管理员登录
- ...

完整 API：[twikoo.js.org/api.html](https://twikoo.js.org/api.html)
