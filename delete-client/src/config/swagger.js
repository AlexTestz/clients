// src/config/swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Configuración de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Delete Client API',
      version: '1.0.0',
      description: 'API documentation for deleting clients from the database',
    },
  },
  apis: ['./src/routes/clients.routes.js', './src/controllers/clients.controller.js'], // Archivos donde estarán los comentarios de Swagger
};

// Generar la especificación Swagger
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
