// src/config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Update Client API',
      version: '1.0.0',
      description: 'API documentation for updating clients in the database',
    },
  },
  apis: ['./src/routes/clients.routes.js', './src/controllers/clients.controller.js'], // Archives where Swagger comments are located
};

// swagger specification generation
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
