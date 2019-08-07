# react-ssr

- 参考来源：https://juejin.im/post/5d1fe6be51882579db031a6d

## 启动方式

1. 进入node_server文件夹执行 cnpm install ，然后执行 node app.js ，启动用来输出后端接口的服务器
2. cnpm install nodemon npm run-in-all -g ，全局安装这俩工具
3. 进入ssr文件夹执行cnpm install，然后再执行npm run dev

## 项目目录介绍

- node_server：输出后端接口的服务器，可以使用各种后台语言实现
- ssr：实现服务器端渲染
  - build: 服务器端打包结果
  - public：客户端打包结果


## ssr

- 服务器端渲染
- 就是服务器返回一堆html字符串，然后让浏览器显示

### ssr（服务器端渲染）与csr（客户端渲染）的区别

- csr页面渲染是由js负责进行的，渲染过程：

```bash
浏览器下载html文档（只有一个id为root的div）->浏览器下载JS文件->浏览器运行react代码->页面渲染
```

- ssr是服务端已经得出html并返回给浏览器直接渲染，渲染过程：

```bash
浏览器请求服务器获取到html->页面渲染
```

### csr弊端

- 页面显示要经过js（react代码）文件的执行操作才能显示，首屏加载会比较慢
- 不利于SEO。因为SEO只识别html，然而我们的html只包含一个div

### react

- jsx基于虚拟DOM，渲染jsx需要将其转换为真实DOM
- 编译虚拟DOM的方法：react-dom中的 renderToString方法，此方法不能绑定事件

### 同构

- 同一套react代码，服务器端跑一遍渲染页面，浏览器端跑一遍绑定事件.
- 如此这样做既可以加速首屏显示，又可以在显示出来后加载js完成事件绑定