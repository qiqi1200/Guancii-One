// Vercel Serverless Function for Twikoo
// 部署到 Vercel 后，访问 https://<your-app>.vercel.app 即可使用

const { twikoo } = require('twikoo');
const { MongoClient } = require('mongodb');

// ---------- MongoDB 连接缓存（Vercel Serverless 复用） ----------
let cachedClient = null;
let cachedDb = null;

async function getLikesCollection() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MONGODB_URI 环境变量未设置');
  }
  if (cachedClient && cachedDb) {
    return cachedDb.collection('likes');
  }
  cachedClient = new MongoClient(uri);
  await cachedClient.connect();
  // 与 Twikoo 使用同一数据库
  cachedDb = cachedClient.db('comment');
  return cachedDb.collection('likes');
}

// ---------- 处理文章点赞事件 ----------
async function handlePostLike(body) {
  const { event, url } = body;
  if (!url) {
    return { code: 400, message: '缺少 url 参数' };
  }

  const col = await getLikesCollection();

  if (event === 'POST_LIKE_GET') {
    // 获取当前点赞数
    const doc = await col.findOne({ _id: url });
    return { code: 0, data: { count: doc?.count ?? 0 } };
  }

  if (event === 'POST_LIKE_SET') {
    // 点赞 +1（原子操作）
    const result = await col.findOneAndUpdate(
      { _id: url },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: 'after' }
    );
    return { code: 0, data: { count: result.count } };
  }

  return null; // 未知事件，交由下游处理
}

// ---------- 主入口 ----------
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

  const body = req.body || {};

  // 先尝试处理自定义点赞事件
  if (body.event === 'POST_LIKE_GET' || body.event === 'POST_LIKE_SET') {
    try {
      const result = await handlePostLike(body);
      return res.status(200).json(result);
    } catch (err) {
      console.error('PostLike error:', err);
      return res.status(500).json({
        code: 500,
        message: err.message || 'Like service error'
      });
    }
  }

  // 其他事件交由 Twikoo 处理
  try {
    const result = await twikoo(body);
    return res.status(200).json(result);
  } catch (err) {
    console.error('Twikoo error:', err);
    return res.status(500).json({
      code: 500,
      message: err.message || 'Internal server error'
    });
  }
};