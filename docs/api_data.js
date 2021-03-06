define({
  api: [
    {
      type: 'get',
      url: '/user/:id',
      title: 'Get User information',
      name: 'GetUser',
      group: 'User',
      permission: [
        {
          name: 'User',
        },
      ],
      header: {
        fields: {
          Headers: [
            {
              group: 'Headers',
              type: 'String',
              optional: false,
              field: 'X-Token',
              description: '<p>API Acess Token.</p>',
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
            content:
              'HTTP/1.1 200 OK\n{\n  "_id": "12345tefwq234dfwavr431rt4g",\n  "username": "joe@example.com",\n}',
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
              field: '404',
              description: '<p>The id of the User was not found.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Error-Response:',
            content:
              'HTTP/1.1 404 Not Found\n{\n  "error": "User Not Found"\n}',
            type: 'json',
          },
        ],
      },
      version: '0.0.0',
      filename: 'server/api/endpoints/user/routes.js',
      groupTitle: 'User',
    },
    {
      type: 'get',
      url: '/user',
      title: 'Get Users information',
      name: 'GetUsers',
      group: 'User',
      permission: [
        {
          name: 'Admin',
        },
      ],
      header: {
        fields: {
          Headers: [
            {
              group: 'Headers',
              type: 'String',
              optional: false,
              field: 'X-Token',
              description: '<p>API Acess Token.</p>',
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: 'Success-Response:',
            content:
              ' HTTP/1.1 200 OK\n[\n {\n   "_id": "12345tefwq234dfwavr431rt4g",\n   "username": "joe@example.com",\n },\n {\n   "_id": "12345tefwq2rewwe34dfwavr431rt4g",\n   "username": "john@example.com",\n }\n ....\n]',
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
              field: 'Error',
              description: '<p>The user is not an admin.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Error-Response:',
            content:
              'HTTP/1.1 401 Not Found\n{\n  "error": "User is not Application."\n}',
            type: 'json',
          },
        ],
      },
      version: '0.0.0',
      filename: 'server/api/endpoints/user/routes.js',
      groupTitle: 'User',
    },
    {
      type: 'post',
      url: '/user',
      title: 'Create a new User',
      name: 'PostUser',
      group: 'User',
      permission: [
        {
          name: 'Admin',
        },
      ],
      description:
        '<p>In this case &quot;apiUse&quot; is defined and used. Define blocks with params that will be used in several functions, so you dont have to rewrite them.</p>',
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'username',
              description: '<p>Userame of the User.</p>',
            },
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'password',
              description: '<p>Password of the User.</p>',
            },
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'token',
              description: '<p>Access Token of the User.</p>',
            },
          ],
        },
      },
      success: {
        examples: [
          {
            title: 'Success-Response:',
            content:
              'HTTP/1.1 200 OK\n{\n  "_id": "12345tefwq234dfwavr431rt4g",\n  "username": "joe@example.com",\n}',
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
              field: 'Error',
              description: '<p>The user is not an admin.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Error-Response:',
            content:
              'HTTP/1.1 401 Not Found\n{\n  "error": "User is not Application."\n}',
            type: 'json',
          },
        ],
      },
      version: '0.0.0',
      filename: 'server/api/endpoints/user/routes.js',
      groupTitle: 'User',
    },
    {
      type: 'put',
      url: '/user/:id',
      title: 'Change a new User',
      name: 'PutUser',
      group: 'User',
      permission: [
        {
          name: 'User',
        },
      ],
      parameter: {
        fields: {
          Parameter: [
            {
              group: 'Parameter',
              type: 'String',
              optional: false,
              field: 'token',
              description: '<p>Access Token of the User.</p>',
            },
            {
              group: 'Parameter',
              type: 'id',
              optional: false,
              field: 'id',
              description: '<p>ID of the User.</p>',
            },
          ],
        },
      },
      description:
        '<p>This function has same errors like POST /user, but errors not defined again, they were included with &quot;apiUse&quot;</p>',
      success: {
        examples: [
          {
            title: 'Success-Response:',
            content:
              'HTTP/1.1 200 OK\n{\n  "_id": "12345tefwq234dfwavr431rt4g",\n  "updated": "true",\n}',
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
              field: '404',
              description: '<p>The id of the User was not found.</p>',
            },
          ],
        },
        examples: [
          {
            title: 'Error-Response:',
            content:
              'HTTP/1.1 404 Not Found\n{\n  "error": "User Not Found"\n}',
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
