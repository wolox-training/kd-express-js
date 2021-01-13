module.exports = {
  userId: {
    type: 'integer',
    example: 7
  },
  firstName: {
    type: 'string',
    example: 'Tomas'
  },
  lastName: {
    type: 'string',
    example: 'Smith'
  },
  email: {
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
        $ref: '#/components/schemas/firstName'
      },
      lastName: {
        $ref: '#/components/schemas/lastName'
      },
      email: {
        $ref: '#/components/schemas/email'
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
