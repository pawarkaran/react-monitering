import React from 'react';

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Issues = React.lazy(() => import('./views/issues'));
const Alertlog = React.lazy(() => import('./views/alertlog'));
const Tasks = React.lazy(() => import('./views/tasks'));
const Analytics = React.lazy(() => import('./views/analytics'));
const Teams = React.lazy(() => import('./views/teams'));
const Call = React.lazy(() => import('./views/call'));

const IssueDetails = React.lazy(() => import('./issues/issueEdit'));

const UserDetails = React.lazy(() => import('./containers/AdminDashboard/AdminUser_details'))



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard',exact: true, name: 'dashboard', component: Dashboard },
  { path: '/issues',exact: true, name: 'Issues', component: Issues },
  { path: '/alertlog',exact: true, name: 'Alert Log', component: Alertlog },
  { path: '/tasks',exact: true, name: 'Tasks', component: Tasks },
  { path: '/analytics',exact: true, name: 'Anaylytics', component: Analytics },
  { path: '/teams',exact: true, name: 'Teams', component: Teams },
  { path: '/call',exact: true, name: 'Calls', component: Call },

  { path: '/issues/details/:id',exact: true, name: 'Issue Details', component: IssueDetails },

  { path: '/issues/details/:user_id',exact: true, name: 'Issue Details', component: UserDetails },

];

export default routes;
