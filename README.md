## 项目简介

    基于Taro+React+TypeScript的微信小程序

## 技术依赖

-   Taro -（小程序框架）
-   React - （基础框架）
-   TypeScript - （静态类型）
-   sass -（css 预处理器）

## 功能

-   首页

## 项目截图

## 目录结构

```
├── config             编译配置
│   ├── dev.js             开发模式配置
│   ├── index.js           默认配置
│   └── prod.js            生产模式配置
├── dist                构建目录
├── docs                文档
├── src                 源码目录
│	├── assets                静态资源
│		├── images                   图片
│	├── components            组件
│		├── base                  基础组件
│		├── business              业务组件
│	├── hooks                 Reack hook
│	├── mock                  数据模拟
│	├── pages                 页面级组件
│	├── service               公共接口
│	├── store                 状态管理
│	├── utils                 全局公用方法
│	├── app.scss              全局样式
│	├── app.tsx				  根组件
│   ├── app.config.js         全局配置
│	├── index.html			  入口文件
├── .eslintrc.js        ESLint 配置
├── .gitignore          git提交时忽略的文件
├── .babel.config.js    babel配置
├── global.d.ts         全局类型定义
├──	package.json        项目基本信息
├── project.config.json 小程序项目配置
├── README.md           项目说明
├── tsconfig.json	    TypeScript配置
```

## 使用

### 运行

```
npm run dev
```

### 构建

```
npm run build
```
