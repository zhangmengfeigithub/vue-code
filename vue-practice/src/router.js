module.exports = function (router) {
    router.map({
        '/about': {
            name: 'about',
            component: require('./views/about.vue')
        }
    })
}