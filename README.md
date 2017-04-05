# vue-small-work

>  本项目是基于vue2个人项目。

>*  感谢[shanelau](https://github.com/shanelau/zhihu)提供的知乎api接口

>* 本项目地址[github地址](https://github.com/ddqre12345/vue-small-work)



### 项目技术架构
***
*  vue-cli
*  vue
*  axios
*  vue-router
*  vuex
*  vue-infinite-scroll
*  stylus
*  webpack

###安装
***
项目地址：（`git clone`）
```shell
git clone https://github.com/ddqre12345/vue-small-work.git
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](https://nodejs.org/))

```
npm install
```
启动服务(http://localhost:9090)

```
npm run dev
```
发布代码

```
npm run build
```
### 安装注意
安装 vue-cli
```
npm install -g vue-cli
```
安装 vue-cli eslint
```
npm install -g eslint
```
 安装依赖 friendly-errors-webpack-plugin

```
npm install friendly-errors-webpack-plugin --save-dev
```
###目录结构
***
<pre>
├── build              // 构建服务和webpack配置
├── config             // 项目不同环境的配置
├── dist               // 项目build目录
├── index.html         // 项目入口文件
├── package.json       // 项目配置文件
├── src                // 生产目录
│   ├── assets         // 图片资源
│   ├── common          // 公共的css js 资源
│   ├── components     // 各种组件
│   ├── App.vue         // 主页面 
│   ├── vuex           // vuex状态管理器
│   ├── router.js     // 路由配置器
│   └── main.js        // Webpack 预编译入口
</pre>

###实现的功能
***
* 瀑布流布局
* 无限滚动
* 图片懒加载
* 组件缓存
* 等等


### 最后
感谢开源社区 ，很多不足之处请多指教
 
 
 
