export default [
    {
      _tag: 'CSidebarNavItem',
      name: 'Admin',
      to: '#',
      icon: 'cil-speedometer',
      badge: {
        color: 'info',
        // text: 'NEW',
      }
    },
    // {
    //   _tag: 'CSidebarNavTitle',
    //   _children: ['Theme']
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Colors',
    //   to: '/theme/colors',
    //   icon: 'cil-drop',
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Typography',
    //   to: '/theme/typography',
    //   icon: 'cil-pencil',
    // },
    {
      _tag: 'CSidebarNavTitle',
      _children: ['Components']
    },
  
  
    {
      _tag: 'CSidebarNavItem',
      name: 'User',
      to: '/users',
      icon: 'cil-people'
    },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Alert Log',
    //   to: '/alertlog',
    //   icon: 'cil-star'
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Tasks',
    //   to: '/tasks',
    //   icon: 'cil-task'
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Analytics',
    //   to: '/analytics',
    //   icon: 'cil-graph'
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: 'Teams',
    //   to: '/teams',
    //   icon: 'cil-people'
    // },
    // {
    //   _tag: 'CSidebarNavItem',
    //   name: "Who's on Call ",
    //   to: '/call',
    //   icon: 'cil-phone'
    // },
  
  
  
  
  
    {
      _tag: 'CSidebarNavDivider',
      className: 'm-2'
    }
  ]
  