# Vercel部署问题排查指南

## 问题：GitHub已更新，但Vercel未自动部署

### 可能原因及解决方案

### 1. 检查Vercel与GitHub的连接状态

**操作步骤：**
1. 登录Vercel控制台 (https://vercel.com/dashboard)
2. 选择您的项目
3. 进入「Settings」→「Git」页面
4. 检查GitHub仓库连接是否正常
5. 如果显示「Reconnect」按钮，点击重新连接

**预期结果：** 显示「Connected to GitHub」状态

### 2. 检查部署触发设置

**操作步骤：**
1. 进入Vercel项目的「Settings」→「Git」页面
2. 检查「Deploy Hooks」和「Ignored Build Step」设置
3. 确认「Production Branch」是否设置为您推送的分支（通常是main或master）
4. 检查「Ignored Build Step」是否包含导致部署跳过的条件

**关键检查点：**
- 确保没有设置错误的忽略条件
- 确认分支名称是否正确
- 检查是否有部署钩子配置问题

### 3. 手动触发部署

如果自动部署失效，可以手动触发部署：

**操作步骤：**
1. 登录Vercel控制台
2. 选择您的项目
3. 点击「Deployments」选项卡
4. 点击右上角的「Deploy」按钮
5. 选择「Deploy from Git」
6. 选择要部署的分支

**预期结果：** Vercel开始构建并部署您的代码

### 4. 检查GitHub Webhook状态

**操作步骤：**
1. 登录GitHub
2. 进入您的仓库
3. 点击「Settings」→「Webhooks」
4. 找到Vercel相关的Webhook
5. 检查最近的交付状态（Deliveries）
6. 如果显示失败，点击查看详细错误信息

**常见Webhook错误：**
- 404 Not Found：Vercel项目可能已删除
- 401 Unauthorized：认证信息失效
- 超时：网络连接问题

### 5. 检查Vercel部署日志

**操作步骤：**
1. 登录Vercel控制台
2. 选择您的项目
3. 进入「Deployments」选项卡
4. 查看最近的部署记录
5. 点击失败的部署，查看详细日志

**关键日志检查点：**
- 构建命令是否执行成功
- 依赖安装是否完成
- 是否有编译错误
- 是否有权限问题

### 6. 检查Vercel部署限制

**操作步骤：**
1. 登录Vercel控制台
2. 点击右上角的用户头像
3. 选择「Settings」→「Billing」
4. 检查部署配额使用情况
5. 确认是否达到了部署次数限制

**注意：** Vercel免费计划有每月部署次数限制

### 7. 检查vercel.json配置

检查项目根目录的`vercel.json`文件，确保配置正确：

**关键配置项：**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}
```

### 8. 检查项目构建命令

检查`package.json`中的构建命令：

**关键配置项：**
```json
{
  "scripts": {
    "build": "vite build",
    "dev": "vite",
    "start": "vite preview"
  }
}
```

### 9. 检查是否有未解决的冲突

**操作步骤：**
1. 检查GitHub仓库是否有未合并的Pull Request
2. 确认分支是否处于冲突状态
3. 解决所有冲突后再推送代码

### 10. 等待并重新尝试

有时Vercel可能会有临时的服务中断或延迟：
1. 等待15-30分钟后重新推送代码
2. 检查Vercel状态页面 (https://vercel.status.com/) 确认是否有服务中断

## 快速解决步骤

1. **重新连接GitHub**：在Vercel项目设置中重新连接GitHub
2. **手动触发部署**：在Vercel控制台手动部署最新代码
3. **检查Webhook**：确认GitHub Webhook状态正常
4. **查看部署日志**：检查最近部署的详细日志
5. **检查构建命令**：确认package.json中的构建命令正确

## 后续建议

1. **启用部署通知**：在Vercel设置中启用部署成功/失败通知
2. **设置部署钩子**：为关键分支设置专门的部署钩子
3. **定期检查部署状态**：每周检查一次部署历史，确保自动部署正常
4. **使用Git Actions**：考虑使用GitHub Actions触发Vercel部署，增加可靠性

## 紧急解决方法

如果上述方法都无效，可以尝试：
1. 删除现有Vercel项目
2. 重新在Vercel上导入GitHub仓库
3. 重新配置所有环境变量和设置

---

**最后更新时间：** 2025-12-28
**适用Vercel版本：** Vercel Platform v2+