
import { AdminUsers } from './AdminUsers';
import AdminUserDetails from './AdminUser_details';

// const users = React.lazy(() => import('../AdminDashboard/AdminUsers'));
// const Alertlog = React.lazy(() => import('./'));
// const Tasks = React.lazy(() => import('./views/tasks'));
// const Analytics = React.lazy(() => import('./views/analytics'));
// const Teams = React.lazy(() => import('./views/teams'));
// const Call = React.lazy(() => import('./views/call'));



const AdminRoutes = [
  { path: '/', exact: true, name: 'Home' },

  { path: '/users',exact: true, name: 'Users', component: AdminUsers },


  { path: '/users/details/:id',exact: true, name: 'UserDetails', component: AdminUserDetails },
//   { path: '/alertlog',exact: true, name: 'Alert Log', component: Alertlog },
//   { path: '/tasks',exact: true, name: 'Tasks', component: Tasks },
//   { path: '/analytics',exact: true, name: 'Anaylytics', component: Analytics },
//   { path: '/teams',exact: true, name: 'Teams', component: Teams },
//   { path: '/call',exact: true, name: 'Calls', component: Call },
];

export default AdminRoutes;