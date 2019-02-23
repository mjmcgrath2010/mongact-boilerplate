const adminRoutes = {
  userRoutes: [
    {
      text: 'Posts',
      icon: 'posts',
      path: '/admin/posts',
      children: [
        {
          text: 'New Post',
          icon: 'new-post',
          path: '/admin/posts/create',
        },
      ],
    },
    {
      text: 'Categories',
      icon: 'categories',
      path: '/admin/categories',
    },
  ],
  adminRoutes: [
    {
      text: 'Users',
      icon: 'users',
      path: '/admin/users',
      children: [
        {
          text: 'Invite User',
          icon: 'invite',
          path: '/admin/invite-user',
        },
      ],
    },
  ],
};

export default adminRoutes;
