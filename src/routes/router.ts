import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

import NotFound from '../views/NotFound.vue';
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Employees from '../views/Employees.vue';
import Recruitment from '../views/Recruitment.vue';
import { useUserStore } from '../stores/user';
import { userDefault } from '../utils/constants';

const routes: RouteRecordRaw[] = [
    { path: '/', name: 'login', component: Login },
    {
        path: '/dashboard', component: Dashboard,
        redirect() {
            return {
                path: '/dashboard/empleados',
            };
        },
        beforeEnter: (_to, _from, next) => {
            const userStore = useUserStore();
            const token = localStorage.getItem('token');
            if (token) {
                userStore.setUserData(userDefault);
                next();
            } else {
                next('/');
            }
        },
        children: [
            { path: '/', redirect: '/empleados' },
            { path: 'empleados', name: 'empleados', component: Employees },
            { path: 'reclutamiento', name: 'reclutamiento', component: Recruitment },
        ]
    },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;

