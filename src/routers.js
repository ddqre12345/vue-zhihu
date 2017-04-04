// require.ensure 是 Webpack 的特殊语法，用来设置 组件到底路径
/**
 * 1.定义路由，每个路由应该映射一个组件
 * path : 浏览器的显示的路径
 * name ： 路由的名字
 * component : 路由的组件路径
 */

const routers = [{
  path: '/',
  name: 'index',
  component(resolve) {
    require.ensure(['./App.vue'], () => {
      resolve(require('./App.vue'));
    });
  },
  children: [
    {
      path: 'columns',
      name: 'columns',
      component(resolve) {
        require.ensure(['./components/lists/columns.vue'], () => {
          resolve(require('./components/lists/columns.vue'));
        });
      },
      meta: { keepAlive: true }
    }, {
      path: 'column',
      name: 'column',
      component(resolve) {
        require.ensure(['./components/content/columnDetails.vue'], () => {
          resolve(require('./components/content/columnDetails.vue'));
        });
      },
      meta: { keepAlive: false }
    }, {
      path: 'article',
      name: 'article',
      component(resolve) {
        require.ensure(['./components/content/articleContent.vue'], () => {
          resolve(require('./components/content/articleContent.vue'));
        });
      },
      meta: { keepAlive: false }
    }, {
      path: 'articles',
      name: 'articles',
      component(resolve) {
        require.ensure(['./components/lists/articles.vue'], () => {
          resolve(require('./components/lists/articles.vue'));
        });
      },
      meta: { keepAlive: true }
    }
  ]
}];

export default routers;
