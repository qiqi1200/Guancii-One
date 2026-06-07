// 本地调试入口
// 运行：node index.js
// 访问：http://localhost:8080
// 注意：仅用于开发调试，生产环境请用 Vercel 部署

const express = require('express');
const cors = require('cors');
const { twikoo } = require('twikoo');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json({ limit: '10mb' }));

app.post('/', async (req, res) => {
  try {
    const result = await twikoo(req.body);
    res.json(result);
  } catch (err) {
    console.error('Twikoo error:', err);
    res.status(500).json({
      code: 500,
      message: err.message || 'Internal server error'
    });
  }
});

app.get('/', (req, res) => {
  res.json({
    message: 'Twikoo 评论服务运行中',
    usage: '请用 POST 方法访问，event 参数参考 https://twikoo.js.org/api.html'
  });
});

app.listen(PORT, () => {
  console.log(`Twikoo server listening on http://localhost:${PORT}`);
  console.log('Press Ctrl+C to stop');
});
