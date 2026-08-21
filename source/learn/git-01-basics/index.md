---
title: Git 01：版本控制基础
date: 2026-08-21 12:45:00
layout: page
type: page
comments: false
aside: true
top_img: /img/cover-learning.svg
---

## 学习目标

完成这一节后，你应该能够解释 Git 的三个核心区域：

1. Working Tree：你正在修改的文件
2. Staging Area：准备进入下一次提交的改动
3. Repository：已经保存的提交历史

## 核心命令

```bash
git status
git add <file>
git commit -m "message"
git log --oneline
```

## 推荐练习

创建一个测试目录，连续做 3 次小修改，每次分别执行 `status → add → commit → log`，观察状态如何变化。

{% note success flat %}
完成后回到 [技术学习系统](/learn/) 勾选本节进度。
{% endnote %}
