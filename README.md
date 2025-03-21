# vue3-rabbit - 小兔鲜电商平台

Vue3-based E-commerce Platform (Vue3 + JavaScript Version)

## 项目概述 / Project Overview
基于Vue3构建的PC端电商平台，包含商品展示、购物车管理、用户认证等核心电商功能模块。  
Vue3-powered e-commerce platform featuring product display, shopping cart management, user authentication, and essential e-commerce modules.

## 技术栈 / Tech Stack
- 前端框架 / Frontend: `Vue3` + `Vite`
- 状态管理 / State: `Pinia`
- 路由管理 / Routing: `Vue Router`
- 网络请求 / HTTP: `axios` + 接口封装
- UI组件 / UI: `Element Plus`
- 工具库 / Utilities: `VueUse`
- 样式处理 / Styling: `SCSS` + 自动样式变量注入
- 代码规范 / Linter: `ESLint`

## 核心功能 / Features
| 功能模块         | Feature Module        | 实现文件                          |
|------------------|-----------------------|-----------------------------------|
| API请求封装      | API Service          | `src/apis/*.js`                  |
| 用户认证体系     | Auth System           | `src/Layout/components/LayoutNav` |
| 商品分类展示     | Category Display      | `src/views/Home/components/HomeCategory` |
| 购物车管理       | Cart Management       | `src/Layout/components/HeaderCart` |
| 吸顶导航         | Sticky Navigation     | `src/Layout/components/LayoutFixed` |
| 商品详情交互     | Product Interaction   | `src/components/XtxSku`          |
| 会员中心         | User Center           | `src/views/Member/components/UserInfo` |

## 项目结构 / Structure
```bash
src/
├─ apis/       # API模块
├─ assets/      # 静态资源
├─ components/  # 全局组件
├─ Layout/      # 布局组件
├─ stores/      # Pinia状态管理
├─ views/       # 页面视图
└─ styles/      # 全局样式
```

## 开发环境配置 / Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + 以下扩展：
- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (Vue3开发)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) (代码规范检查)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) (代码格式化)
- [Vue DevTools](https://marketplace.visualstudio.com/items?itemName=vue.vscode-vue-devtools) (Vue调试工具)

❗ 请禁用Vetur扩展  
❗ Disable Vetur extension

## 定制配置 / Customize Configuration
我们扩展了以下Vite配置：  
We have extended the following Vite configurations:
- 配置了路径别名 `@ -> ./src` 
- 自动注入SCSS全局变量 (`styles/var.scss`)
- 集成Vue DevTools调试插件

查看完整配置：[vite.config.js](./vite.config.js)  
See full config: [vite.config.js](./vite.config.js)


### 安装依赖 / Installation
```bash
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Lint with [ESLint](https://eslint.org/)

```sh
pnpm lint