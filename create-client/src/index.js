// src/index.js

require('dotenv').config(); // load environment variables
const express = require('express');
const cors = require('cors');
const { swaggerUi, swaggerSpec } = require('./config/swagger');  // Import Swagger configuration
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// swagger UI at '/docs'
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const clientRoutes = require('./routes/clients.routes');
app.use('/api', clientRoutes);

// Root route (simple health check)
app.get('/', (req, res) => {
  res.send('✅ Create Client Service is running!');
});

// Error handling middleware
const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

// Start the server if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
  });
}

// Export the app for testing or further configuration
module.exports = app;
