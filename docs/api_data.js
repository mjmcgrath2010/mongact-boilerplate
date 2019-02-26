define({
  api: [
    {
      type: 'get',
      url: '/user/:id',
      title: 'Request User information',
      name: 'Get_Users',
      group: 'User',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'Number',
              optional: false,
              field: 'id',
              description: '<p>Users unique ID.</p>',
            },
          ],
        },
      },
      success: {
        fields: {
          'Success 200': [
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: '_id',
              description: '<p>Id of the User.</p>',
            },
            {
              group: 'Success 200',
              type: 'String',
              optional: false,
              field: 'username',
              description: '<p>Username of the User.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Success-Response:',
            content: 'HTTP/1.1 200 OK\n{\n  "_id": "12345tefwq234dfwavr431rt4g",\n  "username": "joe@example.com",\n}',
            type: 'json',
          },
        ],
      },
      error: {
        fields: {
          'Error 4xx': [
            {
              group: 'Error 4xx',
              optional: false,
              field: 'UserNotFound',
              description: '<p>The id of the User was not found.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Error-Response:',
            content: 'HTTP/1.1 404 Not Found\n{\n  "error": "User Not Found"\n}',
            type: 'json',
          },
        ],
      },
      version: '0.0.0',
      filename: 'server/api/endpoints/user/routes.js',
      groupTitle: 'User',
    },
  ],
});
