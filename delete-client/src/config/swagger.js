// src/config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// swagger configuration
// This configuration defines the OpenAPI specification for the Delete Client API
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delete Client API',
      version: '1.0.0',
      description: 'API documentation for deleting clients from the database',
    },
  },
  apis: ['./src/routes/clients.routes.js', './src/controllers/clients.controller.js'], // archives where Swagger comments are located
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
