---
title: "Git 03：GitHub 协作工作流"
description: "把本地 Git 与 GitHub 连接起来，理解 remote、push、pull 和 Pull Request。"
track: "Git & GitHub"
order: 3
level: "beginner"
tags: ["GitHub", "Remote", "Pull Request"]
estimatedMinutes: 60
---

## 学习目标

完成这一节后，你应该能够独立完成：

本地修改 → feature branch → push → Pull Request → merge → pull。

## 核心命令

```bash
git remote -v
git push -u origin feature/demo
git pull origin main
```

## GitHub 上的关键对象

- Repository：远程仓库
- Pull Request：请求把一个分支合并到另一个分支
- Issues：任务和问题跟踪
- Actions：自动测试、构建和部署

你现在这个博客的发布流程，本身就是一个完整的 GitHub 工作流案例。
