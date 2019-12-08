let beforeEnter = (to, from, next) => {
    next()
}
var devRoutes = []
let app = require('./app.js')
devRoutes = devRoutes.concat(app.default.routes)
for(let x = 0; x < devRoutes.length; x++) {
    devRoutes[x]['beforeEnter'] = beforeEnter
}
let routes = [
    {
        path: '/login',
        name: 'login',
        component: resolve => require(['views/Login.vue'], resolve),
        beforeEnter : beforeEnter
    },
    {
        path: '/Register',
        name: 'registered',
        component: resolve => require(['views/Register.vue'], resolve),
        beforeEnter : beforeEnter
    }

]
routes = routes.concat(devRoutes)
export default{
    routes: routes
}