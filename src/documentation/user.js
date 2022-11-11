export const user = {
  '/api/v1/users/signup': {
    post: {
      tags: ['Authentication'],
      summary: 'This will login a user',
      description: '',
      produces: ['production/json'],
      parameters: [
        {
          name: 'Body',
          in: 'body',
          required: 'true',
          schema: {
            $ref: '#definitions/Signup'
          },
        },
      ],
      responses: {
        201: {
          description: 'User Registered successfully'
        },
        400: {
          description: 'Please provide firstName, lastName, Email address and Password'
        },
        401: {
          description: 'Incorrect email address or password'
        },
        500: {
          description: 'Internal server error'
        }

      }
    }

  },
  '/api/v1/users/signin': {
    post: {
      tags: ['Authentication'],
      summary: 'This will register a new user',
      description: '',
      produces: ['production/json'],
      parameters: [
        {
          name: 'Body',
          in: 'body',
          required: 'true',
          schema: {
            $ref: '#definitions/Login'
          },
        },
      ],
      responses: {
        200: {
          description: 'User Logged in successfully'
        },
        400: {
          description: 'Please provide email address and password'
        },
        401: {
          description: 'Incorrect email address or password'
        },
        500: {
          description: 'Internal server error'
        }

      }
    }

  },
  '/api/v1/users': {
    get: {
      tags: ['Users'],
      summary: 'Get All Users',
      description: 'Get All Users',
      produces: ['application/json'],
      responses: {
        200: {
          description: 'Ok',
        },
      },
    },
    delete: {
      tags: ['Users'],
      summary: 'Delete all users',
      description: 'delete all users in the database',
      operationId: 'delete-all-users',
      consumes: ['application/json'],
      produces: ['application/json'],
      parameters: [
        {
          name: 'authorization',
          in: 'header',
          description: "an authorization header",
          required: true,
          type: "string"

        },
      ],
      responses: {
        200: {
          description: 'Success',
        },
      },
    },
  },
}
export const userDefinition = {
  Login: {
    type: 'object',
    in: 'body',
    required: ['email', 'password'],
    properties: {
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    }
  },
  Signup: {
    type: 'object',
    in: 'body',
    required: ['firstName', 'lastName', 'email', 'password'],
    properties: {
      firstName: {
        type: 'string'
      },
      lastName: {
        type: 'string'
      },
      email: {
        type: 'string'
      },
      password: {
        type: 'string'
      }
    }
  }
}