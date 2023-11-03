## @hanzhisoft/han-ui-theme-element

> 适配于 @hanzhisoft/han-ui@3.x 版本

HanUI 主题包 — Element

### 构建&发布

```sh
# 构建主题
eacp theme ./src/meta.json
# 发布主题包
npm publish [--tag=beta|alpha]

```

### 安装

```sh
# npm
npm install @hanzhisoft/han-ui-theme-element --save
# yarn
yarn add @hanzhisoft/han-ui-theme-element

```

### 模块使用

程序入口：`src/main.js`

```sh
import { Theme } from "@hanzhisoft/eacp-common-core";
# 引入主题包
import elementTheme from "@hanzhisoft/han-ui-theme-element"；
# 安装主题包
Theme.addTheme(elementTheme);
# 切换主题包
Theme.switchTheme("element");
```
