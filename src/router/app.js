  
export default {
    routes: [{
        path: "/login",
        name: "login",
        component: resolve => require(['../views/Login.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: '/Register',
        name: 'register',
        component: resolve => require(['modules/Register.vue'], resolve),
        meta: {
            tokenrequired: false
        }
    },
    {
        path: "/",
        name: "home",
        component: FirstPage
      },
      {
        path: "/header",
        name: "header",
        component: Header
      },
      {
        path: "/notifications",
        name: "notifications",
        component: Notifications,
        meta: {
          tokenRequired: true
        }
      },
      {
        path: "/item",
        name: "item",
        component: Items,
        meta: {
          tokenRequired: true
        }
      },
      {
        path: "/profile",
        name: "profile",
        component: Profile,
        meta: {
          tokenRequired: true
        }
      },
      {
        path: "/edit",
        name: "edit",
        component: Edit,
        meta: {
          tokenRequired: true
        }
        // component: () =>
        // import(/* webpackChunkName: "about" */ "../components/Edit.vue")
    
      },
      {
        path: "/user",
        name: "homeuser",
        component: FirstPageUser
      },
      {
        path: "/headeruser",
        name: "about",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/About.vue")
      },
      {
        path: "/mainpage",
        name: "mainpage",
        component: MainPage,
        meta: {
          tokenRequired: true
        }
      },
      {
        path: "/practice",
        name: "practice",
        component: Practice,
        meta: {
          tokenRequired: true
        }
      },
      {
        path: "/reserved",
        name: "reserved",
        component: Reserved,
        meta: {
          tokenRequired: false
        }
        // component: () =>
        // import(/* webpackChunkName: "about" */ "../components/Reserved.vue")
    
      },
    
      {
        path:"*",
        redirect:{
          path:"/"
        }
    }
    
]
}