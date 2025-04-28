# 双碳管理系统 (Vue3版本)

基于Vue3 + Vite + Element Plus + Pinia构建的双碳管理系统前端

## 技术栈

- 前端框架: Vue 3
- 构建工具: Vite
- UI组件库: Element Plus
- 状态管理: Pinia
- 路由管理: Vue Router
- 图表库: ECharts
- 富文本编辑器: Vue-Quill
- 拖拽组件: VueDraggable

## 项目结构

```
src/
├── api/            # 接口请求
├── assets/         # 静态资源
├── components/     # 公共组件
├── directive/      # 自定义指令
├── layout/         # 布局组件
├── router/         # 路由配置
├── store/          # 状态管理(Pinia)
├── utils/          # 工具函数
└── views/          # 页面组件
```

## 开发环境准备

1. 克隆仓库
   ```bash
   git clone <仓库地址>
   ```

2. 安装依赖
   ```bash
   npm install
   ```

3. 复制环境变量文件
   ```bash
   cp .env.development .env
   ```

4. 启动开发服务器
   ```bash
   npm run dev
   ```

## 构建命令

- 开发环境: `npm run dev`
- 生产环境构建: `npm run build:prod`
- 预发布环境构建: `npm run build:stage`
- 预览生产构建: `npm run preview`

## 代码规范

- ESLint: JavaScript/Vue代码检查
- Prettier: 代码格式化
- Stylelint: 样式检查

提交前自动修复:
```bash
npm run lint:fix
npm run stylelint:fix
```

## 许可证

[MIT License](LICENSE)