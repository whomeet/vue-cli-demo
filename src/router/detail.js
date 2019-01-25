import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Index from '@/pages/detail/index';
import Topic from '@/pages/detail/topic';
const routes = [{
    path: '/',
    component: Index,
    meta: {
        keepAlive: true // 需要被缓存
    }
},{
    path: '/topic',
    component: Topic,
    meta: {
        keepAlive: false // 不需要被缓存
    }
}
];

export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes
});
