// Vercel Serverless Function for Twikoo
// 部署到 Vercel 后，访问 https://<your-app>.vercel.app 即可使用
// 部署步骤：
// 1. 把这个目录推到一个独立的 GitHub 仓库
// 2. 在 Vercel 控制台 Import 该仓库
// 3. 部署完成后，把得到的 URL 填到 src/site.json 的 twikoo.envId

const { twikoo } = require('twikoo');

module.exports = async (req, res) => {
  // CORS 配置
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Content-Type', 'application/json');

  // 处理预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const result = await twikoo(req.body);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Twikoo error:', err);
    return res.status(500).json({
      code: 500,
      message: err.message || 'Internal server error'
    });
  }
};
