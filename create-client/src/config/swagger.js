// src/config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// swagger options
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Client Management API',
      version: '1.0.0',
      description: 'API documentation for managing clients in the system',
    },
  },
  apis: ['./src/routes/clients.routes.js', './src/controllers/clients.controller.js', './src/middlewares/validateClient.js'], // Archivos donde estarán los comentarios de Swagger
};

// Generate Swagger specification
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
