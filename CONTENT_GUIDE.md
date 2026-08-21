# Blog of Even 内容维护指南

站点现在使用 **Hexo + Butterfly**。核心仍然分为两个内容系统：技术文章与技术学习系统。

## 新增一篇技术文章

在 `source/_posts/` 下新建 Markdown 文件，例如：

```text
source/_posts/mysql-architecture.md
```

推荐 Front Matter：

```yaml
---
title: MySQL 体系结构
date: 2026-08-21 13:00:00
updated: 2026-08-21 13:00:00
categories:
  - 后端开发
tags:
  - MySQL
  - Database
description: 从连接层到存储引擎理解 MySQL 的整体架构。
cover: /img/cover-code.svg
---
```

正文直接使用 Markdown。提交到 `main` 后，GitHub Actions 会自动生成并发布。

## 新增学习内容

学习系统入口位于：

```text
source/learn/index.md
```

单节课程使用独立页面，例如：

```text
source/learn/mysql-01-overview/index.md
```

推荐 Front Matter：

```yaml
---
title: MySQL 01：体系结构总览
layout: post
comments: false
aside: true
toc: true
top_img: /img/cover-learning.svg
---
```

课程正文仍然使用 Markdown。新增课程后，同时在 `source/learn/index.md` 中增加一张课程卡片，并给复选框设置唯一的 `data-lesson-check`。

## 学习进度

学习完成状态由：

```text
source/js/learning.js
```

存储在浏览器 `localStorage` 中，不需要后端数据库。不同浏览器和设备之间暂时不会同步。

## 标签与分类

Butterfly / Hexo 会自动根据文章 Front Matter 生成标签和分类内容：

- `/archives/`：文章归档
- `/tags/`：标签
- `/categories/`：分类

## 主题配置

站点配置：

```text
_config.yml
```

Butterfly 配置：

```text
_config.butterfly.yml
```

自定义样式：

```text
source/css/even.css
```

不要直接修改 npm 安装的 Butterfly 主题源码，这样后续可以安全升级主题版本。
