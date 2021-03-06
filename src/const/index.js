import Loadable from 'react-loadable';
import Loading from '_components/loading';

export const routers = [
    {
        path: '/',
        name: '首页',
        exact: true,
        component: Loadable({
            loader: () => import('_pages/home/index'),
            loading: Loading,
        }),
    },
    {
        path: '/list/list',
        name: '列表',
        component: Loadable({
            loader: () => import('_pages/list/index'),
            loading: Loading,
        }),
    },
    {
        path: '/model3d-cdn',
        name: '3d模型',
        component: Loadable({
            loader: () => import('_pages/model3d-cdn/index'),
            loading: Loading,
        }),
    },
    {
        path: '*',
        name: '404',
        component: Loadable({
            loader: () => import('_pages/not-found/index'),
            loading: Loading,
        }),
    },
];
