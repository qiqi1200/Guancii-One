/**
 * 去除 Markdown 语法，提取纯文本用于阅读时间计算。
 */
function stripMarkdown(raw: string): string {
  return raw
    // 去除 YAML frontmatter
    .replace(/^---[\s\S]*?---\n?/, '')
    // 去除 HTML 标签
    .replace(/<[^>]*>/g, '')
    // 去除图片（保留 alt 文本）
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    // 去除链接（保留链接文本）
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    // 去除代码块（围栏式 + 缩进式）
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/^( {4,}|\t+).*$/gm, '')
    // 去除行内代码
    .replace(/`([^`]*)`/g, '$1')
    // 去除粗体/斜体标记
    .replace(/(\*{1,3}|_{1,3})(.*?)\1/g, '$2')
    // 去除标题标记
    .replace(/^#{1,6}\s+/gm, '')
    // 去除引用标记
    .replace(/^>\s*/gm, '')
    // 去除无序列表标记
    .replace(/^[\s]*[-*+]\s+/gm, '')
    // 去除有序列表标记
    .replace(/^[\s]*\d+\.\s+/gm, '')
    // 去除水平线
    .replace(/^[-*_]{3,}\s*$/gm, '')
    // 去除多余空行
    .replace(/\n{2,}/g, '\n')
    .trim();
}

/**
 * 计算混合中英文内容的预估阅读时间。
 *
 * - 中文字符: 400 字/分钟（行业标准）
 * - 英文单词: 200 词/分钟（行业标准）
 * - 最短 1 分钟
 */
export function getReadingTime(rawMarkdown: string): number {
  const text = stripMarkdown(rawMarkdown);

  // 统计中文字符（CJK 统一汉字）
  const chineseChars = (text.match(/[一-鿿㐀-䶿]/g) || []).length;

  // 统计英文单词
  const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;

  return Math.max(1, Math.ceil(chineseChars / 400 + englishWords / 200));
}
