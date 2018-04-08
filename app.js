var routes = [{
    path: '/',
    component: {
      template: `
      <div><h1>首页</h1></div>`
    }
  },
  {
    path: '/about',
    component: {
      template: `
      <div><h1>关于我们</h1></div>`
    }
  },
  {
    path: '/user/:name', // 传递参数一种:name 一种?age=1&city=福州
    // <h1>我今年{{$route.query.age}}岁</h1>
    // <h1>我住在{{$route.query.city}}</h1>
    // <router-link :to="'/user/'+ $route.params.name+ '/more'">更多信息</router-link>
    component: {
      template: `
      <div><h1>我叫:{{$route.params.name}}</h1>
   
      <router-link to="more" append>更多信息</router-link>
      <router-view></router-view>
      </div>`
    },
    // 子路由
    children: [{
      path: 'more', // 传递参数一种:name 一种?age=1&city=福州
      component: {
        template: `
        <div><h1>我叫:{{$route.params.name}}</h1>
        <h1>详细信息</h1>
      
        </div>`
      }
    }]
  }
];

var router = new VueRouter({
  routes: routes,
});

new Vue({
  el: '#root',
  router: router,
})