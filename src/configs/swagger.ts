const schema = require('../swagger/schema.swagger');

const swaggerConfig = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0',
      description: 'CRUD User - Skill Test at Minilemon',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: schema.components,
  },
  apis: ['./src/routes/*.ts', './src/swagger/*.ts'],
};

export default swaggerConfig;
