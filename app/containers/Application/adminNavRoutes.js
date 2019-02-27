const adminRoutes = {
  userRoutes: [
    {
      text: 'Post',
      icon: 'posts',
      children: [
        {
          text: 'All Posts',
          icon: 'posts',
          path: '/app/posts',
        },
        {
          text: 'New Post',
          icon: 'new-post',
          path: '/app/posts/create',
        },
      ],
    },
    {
      text: 'Categories',
      icon: 'categories',
      path: '/app/categories',
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
          path: '/app/users',
        },
        {
          text: 'Invite User',
          icon: 'invite',
          path: '/app/invite-user',
        },
      ],
    },
  ],
};

export default adminRoutes;
