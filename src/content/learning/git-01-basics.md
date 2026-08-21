---
title: "Git 01：版本控制基础"
description: "理解工作区、暂存区、提交以及最常用的 Git 工作流。"
track: "Git & GitHub"
order: 1
level: "beginner"
tags: ["Git", "Version Control"]
estimatedMinutes: 45
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
