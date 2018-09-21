import Home from './pages/home';
import Detail from './pages/detail';

const routes = [
    {
      path: '/',
      exact: true,
      component: Home,
    },
    {
      path: '/detail/:id',
      component: Detail,
    },
]

export default routes;
