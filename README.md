# Blog of Even

个人技术博客与学习系统，基于 **Hexo + Butterfly** 构建并部署到 GitHub Pages。

## 技术栈

- Hexo 8
- Butterfly 5
- Markdown
- GitHub Actions
- GitHub Pages

## 本地开发

```bash
npm install
npm run dev
```

生成静态站点：

```bash
npm run build
```

生成结果位于 `public/`。

## 内容目录

```text
source/
├── _posts/              # 技术文章
├── learn/               # 技术学习系统
├── tags/                # 标签页
├── categories/          # 分类页
├── about/               # 关于页
├── css/even.css         # Blog of Even 自定义样式
├── js/learning.js       # 学习进度逻辑
└── img/                 # 自有站点素材
```

主题使用官方 `hexo-theme-butterfly` npm 包，不直接复制第三方个人博客的文章、图片或私有定制代码。
