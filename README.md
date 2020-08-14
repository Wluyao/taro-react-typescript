## 项目简介

    基于Taro+React+TypeScript的微信小程序


## 技术依赖

- Taro（跨端框架）
- Taro-ui（组件库）
- React （基础框架）
- TypeScript （静态类型）
- sass （css 预处理器）

## 功能

- 首页


## 目录结构

```
├── config             编译配置
│   ├── dev.js             开发模式配置
│   ├── index.js           默认配置
│   └── prod.js            生产模式配置
├── dist                构建目录
├── docs                文档
├── src                 源码目录
│   ├── assets                静态资源
│	    ├── fonts                    字体
│	    ├── images                   图片
│	    └── styles                   样式
│   ├── components            组件
│       ├── base                  基础组件
│       └── business              业务组件
│   ├── hooks                 Reack hook
│   ├── model                 通用数据模型
│   ├── pages                 页面级组件
│   ├── service               公共接口
│   ├── store                 全局状态
│   ├── utils                 全局公用方法
│   ├── app.tsx				  根组件
│   ├── app.config.js         全局配置
│   └── index.html			  入口文件
├── .eslintrc.js        ESLint 配置
├── .gitignore          git提交时忽略的文件
├── .babel.config.js    babel配置
├── global.d.ts         全局类型定义
├── package.json        项目基本信息
├── project.config.json 小程序项目配置
├── README.md           项目说明
├── tsconfig.json	    TypeScript配置
```

## 使用

### 安装依赖

```
yarn
```

### 运行

```
yarn dev:weapp
```

### 预览

```
将项目导入进微信开发者工具进行查看
```

### 构建

```
yarn build:weapp
```

