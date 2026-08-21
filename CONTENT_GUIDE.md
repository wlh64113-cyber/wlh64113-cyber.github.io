# Blog of Even 内容维护指南

这个站点包含两个内容系统：Articles（文章）和 Learning（学习路线）。

## 新增一篇文章

在 `src/content/articles/` 下新建 Markdown 文件，例如：

```text
src/content/articles/mysql-architecture.md
```

文件头部使用：

```yaml
---
title: "MySQL 体系结构"
description: "从连接层到存储引擎理解 MySQL 的整体架构。"
pubDate: 2026-08-21
category: "Backend"
tags: ["MySQL", "Database"]
draft: false
---
```

正文直接写 Markdown。提交后会自动出现在 `/blog`，详情页地址由文件名生成。

## 新增一节学习内容

在 `src/content/learning/` 下新建 Markdown 文件，例如：

```text
src/content/learning/mysql-01-overview.md
```

文件头部使用：

```yaml
---
title: "MySQL 01：体系结构总览"
description: "理解 Server 层和存储引擎层。"
track: "MySQL"
order: 1
level: "beginner"
tags: ["MySQL", "Architecture"]
estimatedMinutes: 45
---
```

`track` 相同的内容会自动归入同一条学习路线，`order` 决定顺序。

## 学习进度

学习完成状态存储在浏览器的 `localStorage` 中，不需要后端数据库。不同浏览器/设备之间暂时不会同步。

未来如果需要账号、跨设备同步、收藏、评论、全文搜索，可以再引入 Supabase / Firebase / 自建 API。
