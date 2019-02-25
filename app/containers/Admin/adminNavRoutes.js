const adminRoutes = {
  userRoutes: [
    {
      text: 'Post',
      icon: 'posts',
      children: [
        {
          text: 'All Posts',
          icon: 'posts',
          path: '/admin/posts',
        },
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
      text: 'User',
      icon: 'users',
      children: [
        {
          text: 'All Users',
          icon: 'users',
          path: '/admin/users',
        },
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
