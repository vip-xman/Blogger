# My Blogger

一个基于 React 19 构建的现代化个人博客应用，专注于简约设计和优雅的用户体验。

## 项目概述

这是一个采用极简主义设计理念的个人博客首页，致力于提供简洁、高雅、具有设计感的阅读体验。项目采用现代化的前端技术栈，注重性能优化和响应式设计。

### 特色功能

- 🎨 **简约设计**: 极简主义风格，突出内容本质
- 📱 **响应式布局**: 完美适配桌面端和移动端
- ⚡ **高性能**: 基于 React 19 的高效渲染
- 🔧 **模块化架构**: 组件化开发，便于维护和扩展
- 🎯 **用户体验**: 注重交互细节和视觉层次

## 技术栈

- **框架**: React 19.1.1
- **构建工具**: Create React App 5.0.1
- **样式方案**: CSS Modules
- **测试框架**: Jest + Testing Library
- **开发工具**: ESLint + React App 配置

## 项目结构

```
my-blogger/
├── public/                 # 静态资源
│   ├── index.html         # HTML 模板
│   └── favicon.ico        # 网站图标
├── src/                   # 源代码
│   ├── components/        # React 组件
│   │   └── HomePage/      # 首页组件
│   │       ├── HomePage.js
│   │       ├── HomePage.module.css
│   │       └── index.js
│   ├── App.js            # 主应用组件
│   ├── App.css           # 应用样式
│   └── index.js          # 入口文件
├── package.json          # 项目配置
└── README.md            # 项目说明

```

## 开发指南

### 环境要求

- Node.js >= 16.0.0
- npm >= 8.0.0

### 快速开始

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd my-blogger
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm start
   ```
   
   访问 [http://localhost:3000](http://localhost:3000) 查看应用

4. **构建生产版本**
   ```bash
   npm run build
   ```

### 可用脚本

- `npm start` - 启动开发服务器
- `npm test` - 运行测试套件
- `npm run build` - 构建生产版本
- `npm run eject` - 弹出 CRA 配置（不可逆操作）

## 设计理念

### 核心原则

1. **极简主义** - 去除冗余，突出核心内容
2. **留白美学** - 充分利用空白空间，营造呼吸感
3. **视觉层次** - 清晰的信息层级，引导用户视线
4. **响应式设计** - 移动端优先，流畅的多设备体验

### 技术特点

- **组件化架构** - 高度可复用的 React 组件
- **CSS 模块化** - 样式隔离，避免命名冲突
- **性能优化** - 代码分割和懒加载
- **现代化开发** - ES6+ 语法，Hooks API

## 部署

项目可以部署到任何支持静态文件托管的平台：

- **Vercel**: 推荐，零配置部署
- **Netlify**: 支持持续集成
- **GitHub Pages**: 免费静态托管
- **传统服务器**: 上传 build 文件夹内容

详细部署指南请参考 [Create React App 部署文档](https://facebook.github.io/create-react-app/docs/deployment)。

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

本项目采用 MIT 许可证。

## 联系方式

如有问题或建议，请通过以下方式联系：

- 创建 [Issue](https://github.com/your-username/my-blogger/issues)
- 发送邮件至：your-email@example.com

---

*最后更新: 2025-07-30*
