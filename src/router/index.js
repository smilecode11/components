import Vue from 'vue';
import VueRouter from "vue-router"

import NotFoundPage from "../view/not-found/index.vue"

const routes = [{
        path: '/',
        redirect: '/search-tree'
    }, {
        path: '/search-tree',
        component: () => import("../view/search-tree-view/index.vue")
    }, {
        path: '/search-tree-v2',
        component: () => import("../view/search-tree-view-v2/index.vue")
    }, {
        path: '/select-test',
        component: () => import("../view/select-test-view/index.vue")
    }, {
        path: '/calendar-test',
        component: () => import("../view/calendar-test/index.vue")
    }, {
        path: '/search-select-list',
        component: () => import("../view/search-select-list/index")
    }, {
        path: '/editor',
        component: () => import("../view/editor/index.vue")
    },
    {
        path: '/css-tools',
        component: () => import("../view/css-tools/index.vue")
    },
    {
        path: '/image-editor',
        component: () => import("../view/image-editor/index.vue")
    },{
        path: '/vue-cropper',
        component: () => import("../view/vue-cropper/index.vue")
    }, {
        path: '*',
        component: NotFoundPage
    }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

export default router