# 知乎专栏，不一样的味道
轻松查看知乎专栏内容, 不经意间发现你的另一面。
>  本项目是基于vue2的开源项目。
>*  感谢[shanelau](https://github.com/shanelau/zhihu)提供的知乎api接口
>*  star，fork是我前进的动力，建议多多益善，仅供参考，哈哈
>*  vue-cli第一次使用的可以看看项目里的注释代码，提神醒脑
>*  [github地址](https://github.com/ddqre12345/vue-small-work)
>*  [demo地址](http://118.89.226.181:1000) （请用chrome的手机模式预览）

### 项目技术
***
*  vue
*  vue-cli
*  axios
*  vue-router
*  vuex
*  vue-infinite-scroll
*  stylus
*  webpack
### 上图
![文章](https://raw.githubusercontent.com/ddqre12345/vue-small-work/master/static/zhihu.gif)

![栏目](https://raw.githubusercontent.com/ddqre12345/vue-small-work/master/static/zhihu2.gif)

###安装
***
项目地址：（`git clone`）
```shell
git clone ddqre12345/vue-small-work
```
通过`npm`安装本地服务第三方依赖模块(需要已安装[Node.js](Node.js))
```
npm install
```
启动服务(http://localhost:8083)
```
npm run dev
```
发布代码
```
npm run build
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

## 更新日志
### v2.0实现的功能-----2017.04.06
***
* 知乎专栏瀑布流
* 文章无限滚动
* 图片懒加载
* 组件缓存


### v3.0规划功能-----开始时间未定
***
* 左右滑动功能
* 个人模块
* 增加文章收藏
* 增加栏目收藏
* 增加评论查看
* 更多功能由你定，欢迎联系我，打造你的知乎

### 最后

感谢开源社区 ，本项目仅供学习交流使用，切勿用于商业用途，如有侵犯第三方版权问题及时联系我


 

 



 

