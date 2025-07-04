// src/config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// swagger configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Get Client API',
      version: '1.0.0',
      description: 'API documentation for fetching clients from the database',
    },
  },
  apis: ['./src/routes/clients.routes.js', './src/controllers/clients.controller.js'], // archives where Swagger comments are located
};

// generate Swagger specification
// This configuration defines the OpenAPI specification for the Get Client API
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
