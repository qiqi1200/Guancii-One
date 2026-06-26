---
# ============================================================================
# DESIGN.md — guancii 的小角落 (blog.260607.best)
# Google Labs DESIGN.md 格式 · AI 编程工具的设计规范入口
# ============================================================================

meta:
  name: guancii 的小角落
  version: "1.0.0"
  framework: "Astro 4 + Tailwind CSS 3"
  darkMode: class-based
  defaultMode: light

# ── 色彩系统 ──────────────────────────────────────────────────────────────────
color:
  primary:
    light: "#ff6b00"          # 强调亮橙 — CTA、按钮、链接
    default: "#9c3f00"        # 深焦糖 — 主色调
    container: "#ffdcc8"      # 暖粉容器 — 浅背景
    dark: "#ffb693"           # 暗色模式主色
    darkContainer: "#572000"  # 暗色模式容器

  background:
    default: "#fff8f1"        # 暖米白 — 主背景
    soft: "#fff1e3"           # 更暖的底色
    dark: "#11131c"           # 暗色模式背景
    darkSoft: "#1d1f29"       # 暗色模式底色

  surface:
    default: "#ffffff"        # 纯白卡片
    variant: "#f4d4be"        # 暖粉变体
    dark: "#1d1f29"           # 暗色模式卡片
    darkVariant: "#32343e"    # 暗色模式变体

  text:
    primary: "#231915"        # 深棕黑 — 正文
    secondary: "#53433c"      # 柔和棕 — 辅助文字
    onPrimary: "#ffffff"      # 主色上的文字
    dark: "#e1e1ef"           # 暗色模式文字
    darkSecondary: "#e2bfb0"  # 暗色模式辅助文字

  accent:
    sky: "#7eb8d6"            # 淡蓝点缀 — 链接、引用边框
    mint: "#a8d5b8"           # 淡绿点缀
    sand: "#d4b896"           # 沙色点缀
    sage: "#3a6b35"           # 深绿 — 第三色
    sageDark: "#b1cfa7"       # 暗色模式绿色

  secondary:
    light: "#001a41"          # 深蓝
    lightContainer: "#dde1ff" # 浅蓝容器
    dark: "#b8c3ff"           # 暗色模式蓝色
    darkContainer: "#0043eb"  # 暗色模式蓝色容器

  border:
    default: "#d7c3b8"        # 暖棕描边
    outline: "#85736b"        # 分割线
    dark: "#5a4136"           # 暗色模式描边
    darkOutline: "#a98a7d"    # 暗色模式分割线

  glass:
    bg: "#ffffff"             # 液态玻璃背景
    border: "#d7c3b8"         # 玻璃描边
    shadow: "0 8px 32px rgba(156,63,0,0.08)"
    darkBg: "#1d1f29"
    darkBorder: "#5a4136"
    darkShadow: "0 8px 32px rgba(0,0,0,0.3)"

# ── 字体系统 ──────────────────────────────────────────────────────────────────
font:
  sans:
    family: "Inter, -apple-system, BlinkMacSystemFont, PingFang SC, Hiragino Sans GB, Microsoft YaHei, system-ui, sans-serif"
    fallback: "PingFang SC, Microsoft YaHei"
    usage: "正文、标题、按钮、导航"

  serif:
    family: "Source Han Serif SC, Songti SC, Georgia, serif"
    usage: "文章正文（长文阅读）"

  mono:
    family: "JetBrains Mono, Fira Code, Consolas, monospace"
    usage: "代码块、终端命令"

  handwriting:
    family: "Architects Daughter, cursive"
    usage: "标签标签 (postit-tag)、涂鸦风格装饰"

  display:
    family: "Montserrat, sans-serif"
    usage: "按钮、标签 chip、导航"

# ── 字号系统 ──────────────────────────────────────────────────────────────────
fontSize:
  xs: "0.75rem"        # 12px — 标签、辅助文字
  sm: "0.875rem"       # 14px — 摘要、日期
  base: "1rem"         # 16px — 正文
  lg: "1.125rem"       # 18px — 大正文
  xl: "1.25rem"        # 20px — 小标题
  2xl: "1.5rem"        # 24px — 二级标题
  3xl: "1.875rem"      # 30px — 一级标题
  4xl: "2.25rem"       # 36px — 页面标题

# ── 间距系统 ──────────────────────────────────────────────────────────────────
spacing:
  unit: "4px"
  scale: [0, 1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24]
  # 0=0, 1=4px, 2=8px, 3=12px, 4=16px, 5=20px, 6=24px, 8=32px, 10=40px, 12=48px, 16=64px, 20=80px, 24=96px

# ── 圆角系统 ──────────────────────────────────────────────────────────────────
borderRadius:
  none: "0"
  sm: "0.25rem"    # 4px — 代码块
  md: "0.5rem"     # 8px — 标签、输入框
  lg: "0.75rem"    # 12px — 卡片
  xl: "1rem"       # 16px — 大卡片、按钮
  2xl: "1.5rem"    # 24px — 模态框
  full: "9999px"   # 胶囊 — 标签 chip、头像

# ── 阴影系统 ──────────────────────────────────────────────────────────────────
shadow:
  none: "none"
  sm: "0 1px 2px rgba(0,0,0,0.05)"
  md: "0 4px 6px rgba(0,0,0,0.07)"
  lg: "0 10px 15px rgba(0,0,0,0.1)"
  xl: "0 20px 25px rgba(0,0,0,0.15)"
  glass: "0 8px 32px rgba(156,63,0,0.08)"
  cardHover: "0 12px 32px rgba(0,0,0,0.25)"

# ── 动效系统 ──────────────────────────────────────────────────────────────────
animation:
  easing:
    default: "cubic-bezier(0.23, 1, 0.32, 1)"  # 统一缓动曲线
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  duration:
    fast: "150ms"
    normal: "250ms"
    slow: "400ms"
    slower: "500ms"
  transitions:
    cardHover: "transform 0.25s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.25s cubic-bezier(0.23, 1, 0.32, 1)"
    fadeIn: "opacity 0.5s cubic-bezier(0.23, 1, 0.32, 1)"
    slideUp: "opacity 0.45s, transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)"
  scrollReveal:
    initial: "opacity: 0; transform: translateY(12px)"
    visible: "opacity: 1; transform: translateY(0)"

# ── 布局系统 ──────────────────────────────────────────────────────────────────
layout:
  maxWidth:
    prose: "70ch"       # 文章最大宽度
    content: "1200px"   # 内容区最大宽度
    card: "380px"       # 卡片最大宽度
  grid:
    posts: "repeat(auto-fill, minmax(320px, 1fr))"
    tags: "repeat(auto-fill, minmax(100px, 1fr))"
  breakpoint:
    sm: "640px"
    md: "768px"
    lg: "1024px"
    xl: "1280px"

# ── 组件规范 ──────────────────────────────────────────────────────────────────
components:
  liquid-glass:
    description: "液态玻璃效果 — 毛玻璃卡片"
    style: "backdrop-filter: blur(20px) saturate(180%); background: rgba(255,255,255,0.55); border: 1px solid rgba(215,195,184,0.4)"
    hover: "box-shadow 增强"

  scrapbook-card:
    description: "涂鸦风格卡片 — 悬浮 translateY(-2px)"
    style: "液态玻璃 + 圆角 + 阴影"
    hover: "translateY(-2px) + 阴影增强"

  postit-tag:
    description: "后贴标签 — 手写体风格"
    style: "Architects Daughter 字体, 14px, padding 4px 12px"
    hover: "背景色变为 primary-light 透明"

  tag-chip:
    description: "标签芯片 — 圆角胶囊"
    style: "Montserrat 字体, rounded-full, surface-variant 背景"
    hover: "背景变为 primary-light 透明，文字变 primary"

  btn-primary:
    description: "主按钮 — 亮橙背景"
    style: "background: #ff6b00, color: white, box-shadow 橙色光晕"
    hover: "背景变深焦糖 #9c3f00, 阴影增强"

  btn-ghost:
    description: "幽灵按钮 — 无背景"
    style: "color: fg-soft"
    hover: "背景 primary-light 透明, 文字变 primary"

  doodle-underline:
    description: "涂鸦下划线 — SVG 波浪线"
    style: "伪元素 ::after, SVG path, color: primary-light"

  cursor-blob:
    description: "鼠标光晕 — 跟随鼠标的径向渐变"
    style: "300px 圆形, radial-gradient, primary-light 透明"

  reading-progress:
    description: "阅读进度条 — 顶部渐变条"
    style: "linear-gradient(primary → secondary), fixed top"

  skeleton:
    description: "骨架屏 — 加载占位"
    style: "cream 渐变, shimmer 动画"

---

# guancii 的小角落 — 设计系统

## 品牌定位

个人博客，大学生的数字空间。风格关键词：**温暖、内敛、手作感**。

默认浅色模式（暖米白底色 + 焦糖/暖橙主色），支持手动切换暗色模式（深蓝黑底 + 粉橙主色）。刷新后恢复浅色。

## 色彩理念

- **Primary（焦糖/暖橙）**：温暖但不张扬，像午后阳光的颜色。用于 CTA、链接、强调
- **Background（暖米白）**：不是纯白，带一点奶油色调，长时间阅读不刺眼
- **Accent Sky（淡蓝）**：冷静的点缀色，用于链接边框和引用块
- **Accent Mint（淡绿）**：自然清新的辅助色
- 所有颜色都经过**明暗双模式适配**，确保可读性

## 字体理念

- **正文**：系统字体栈（Inter + PingFang SC），保证中英文混排舒适
- **代码**：JetBrains Mono，等宽且有 ligature
- **装饰**：Architects Daughter（手写体），用于标签和涂鸦元素
- **UI 组件**：Montserrat，用于按钮和芯片

## 组件理念

- **液态玻璃**：半透明毛玻璃效果，保持通透感但不过度
- **卡片悬浮**：只做轻量 translateY(-2px) + 阴影变化，不做旋转和大幅缩放
- **涂鸦元素**：手写体标签 + SVG 波浪下划线，增加手作感
- **动效克制**：所有动效统一使用 cubic-bezier(0.23, 1, 0.32, 1)，快速但不突兀

## 禁止事项

- 不要使用 3D 磁吸、卡片旋转、按钮缩放旋转等过度动效
- 不要添加过多涂鸦装饰（徽章、emoji、sparkle）
- 不要滥用图标
- 不要使用链接下划线（链接用 border-bottom 替代）
- 不要让页面默认暗色模式
- 不要添加会干扰阅读的弹窗或 overlay

## 文件结构

```
src/
├── styles/global.css        # CSS 变量 + 组件样式（单一入口）
├── tailwind.config.mjs      # Tailwind 扩展配置
├── site.json                # 站点元数据
├── layouts/BaseLayout.astro # 基础布局
├── components/              # 可复用组件
│   ├── Header.astro
│   ├── Footer.astro
│   ├── Sidebar.astro
│   ├── PostCard.astro
│   └── TwikooComments.astro
└── pages/                   # 页面路由
```

## 使用方式

将此文件放在项目根目录。AI 编程工具（Claude Code、Cursor、Hermes 等）会自动读取此文件来理解设计系统，生成符合风格的 UI 代码。
