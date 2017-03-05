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
      path: '/columns/',
      name: 'columns',
      component(resolve) {
        require.ensure(['./components/column/column.vue'], () => {
          resolve(require('./components/column/column.vue'));
        });
      }
    }, {
      path: 'column/:id',
      name: 'column',
      component(resolve) {
        require.ensure(['./components/columnDetails/columnDetails.vue'], () => {
          resolve(require('./components/columnDetails/columnDetails.vue'));
        });
      }
    }, {
      path: 'article/:id/:pid',
      name: 'article',
      component(resolve) {
        require.ensure(['./components/articleContent/articleContent.vue'], () => {
          resolve(require('./components/articleContent/articleContent.vue'));
        });
      }
    }, {
      path: '/day',
      name: 'day',
      component(resolve) {
        require.ensure(['./components/recommend/recommend.vue'], () => {
          resolve(require('./components/recommend/recommend.vue'));
        });
      },
      meta: {requiresAuth: true}
    }, {
      path: '/ios',
      name: 'ios',
      component(resolve) {
        require.ensure(['./components/lists/ios.vue'], () => {
          resolve(require('./components/lists/ios.vue'));
        });
      },
      meta: {requiresAuth: true}
    }, {
      path: '/android',
      name: 'android',
      component(resolve) {
        require.ensure(['./components/lists/android.vue'], () => {
          resolve(require('./components/lists/android.vue'));
        });
      }
    }, {
      path: '/latestNews',
      name: 'latestNews',
      component(resolve) {
        require.ensure(['./components/lists/latestNews.vue'], () => {
          resolve(require('./components/lists/latestNews.vue'));
        });
      },
      meta: {requiresAuth: true}
    }, {
      path: '/hotNews',
      name: 'hotNews',
      component(resolve) {
        require.ensure(['./components/lists/hotNews.vue'], () => {
          resolve(require('./components/lists/hotNews.vue'));
        });
      }
    }, {
      path: '/web',
      name: 'web',
      component(resolve) {
        require.ensure(['./components/lists/web.vue'], () => {
          resolve(require('./components/lists/web.vue'));
        });
      }
    }
  ]
},
  {
    path: '/wecome',
    name: 'wecome',
    component(resolve) {
      require.ensure(['./components/wecome/wecome.vue'], () => {
        resolve(require('./components/wecome/wecome.vue'));
      });
    }
  }];

export default routers;
