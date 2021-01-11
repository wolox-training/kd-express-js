module.exports = {
  '/users': {
    post: {
      tags: ['Operations'],
      description: 'Create user',
      operationId: 'signup',
      parameters: [],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              $ref: '#/components/schemas/User'
            }
          }
        },
        required: true
      },
      responses: {
        201: {
          description: 'New user was created'
        },
        422: {
          description: 'Invalid domain',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              },
              example: {
                message: 'Invalid Wolox domain',
                internalCode: 'mail_domain_error'
              }
            }
          }
        },
        400: {
          description: 'Invalid parameters',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Error'
              },
              example: {
                message: 'Entered email already exists',
                internal_code: 'mail_exist_error'
              }
            }
          }
        }
      }
    }
  }
};
