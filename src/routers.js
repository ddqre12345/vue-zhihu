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
        require.ensure(['./components/column/column.vue'], () => {
          resolve(require('./components/column/column.vue'));
        });
      },
      mate: { keepAlive: true }
    }, {
      path: 'column/:id',
      name: 'column',
      component(resolve) {
        require.ensure(['./components/columnDetails/columnDetails.vue'], () => {
          resolve(require('./components/columnDetails/columnDetails.vue'));
        });
      },
      mate: { keepAlive: false }
    }, {
      path: 'article',
      name: 'article',
      component(resolve) {
        require.ensure(['./components/articleContent/articleContent.vue'], () => {
          resolve(require('./components/articleContent/articleContent.vue'));
        });
      },
      mate: { keepAlive: false }
    }, {
      path: 'articles',
      name: 'articles',
      component(resolve) {
        require.ensure(['./components/lists/articles.vue'], () => {
          resolve(require('./components/lists/articles.vue'));
        });
      },
      mate: { keepAlive: true }
    }
  ]
}, {
    path: 'wecome',
    name: 'wecome',
    component(resolve) {
      require.ensure(['./components/wecome/wecome.vue'], () => {
        resolve(require('./components/wecome/wecome.vue'));
      });
    }
  }];

export default routers;
