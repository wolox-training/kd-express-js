module.exports = {
  userId: {
    type: 'integer',
    example: 7
  },
  userFirstName: {
    type: 'string',
    example: 'Tomas'
  },
  userLastName: {
    type: 'string',
    example: 'Smith'
  },
  userEmail: {
    type: 'string',
    example: 'tom.smith@wolox.com.ar'
  },
  userPassword: {
    type: 'string',
    example: 'tomsmith99'
  },
  User: {
    type: 'object',
    properties: {
      id: {
        $ref: '#/components/schemas/userId'
      },
      firstName: {
        $ref: '#/components/schemas/userFirstName'
      },
      lastName: {
        $ref: '#/components/schemas/userLastName'
      },
      email: {
        $ref: '#/components/schemas/userEmail'
      },
      password: {
        $ref: '#/components/schemas/userPassword'
      }
    }
  },
  Users: {
    type: 'object',
    properties: {
      users: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/User'
        }
      }
    }
  }
};
