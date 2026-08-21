---
title: "Git 02：分支与合并"
description: "掌握 branch、switch、merge，并理解为什么开发工作通常不直接改 main。"
track: "Git & GitHub"
order: 2
level: "beginner"
tags: ["Git", "Branch", "Merge"]
estimatedMinutes: 50
---

## 学习目标

理解分支是如何隔离开发工作的，以及合并是如何把不同开发线重新汇总的。

## 核心命令

```bash
git branch
git switch -c feature/demo
git switch main
git merge feature/demo
```

## 关键概念

- `main` 通常代表稳定版本
- feature branch 用于开发新功能
- merge 把分支上的提交整合回来
- 冲突发生时，需要人工决定最终内容

## 推荐练习

创建 `feature/test` 分支，在同一个文件中分别修改 main 和 feature，再主动制造一次 merge conflict 并解决它。
