// create vue router
import { createRouter, createWebHistory  } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Home',
            description:'Happiness Grows from Trees',
            image: '/forest.jpg'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
            title: 'About',
            description:'Since our founding more than 330 years ago, we have accumulated technical expertise and know how related to wood',
            image: '/history.jpg'
        }
    } ,
    {
        path: '/trading',
        name: 'Trading',
        component: () => import(/* webpackChunkName: "trading" */ '../views/Trading.vue'),
        meta: {
            title: 'Trading',
            description:'Timber and Building Materials',
            image:'https://www.sf-indonesia.co.id/assets/img/Showroom.jpg'
        }
    },
    {
        path: '/property',
        name: 'Property',
        component: () => import(/* webpackChunkName: "property" */ '../views/Property.vue'),
        meta: {
            title: 'Property',
            description:'Housing and Real Estate Business',
            image:'/property.jpg'
        }
    },
    {
        path: '/environment',
        name: 'Environment',
        component: () => import('../views/Environment.vue'),
        meta: {
            title: 'Environment',
            description:'Environment Business', 
            image:'https://www.sf-indonesia.co.id/assets/img/Showroom.jpg'
        }
    }        
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
      },
    routes
})

export default router