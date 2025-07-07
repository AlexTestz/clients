// src/index.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { swaggerUi, swaggerSpec } = require('./config/swagger'); // Import Swagger configuration
const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors()); // CORS middleware to allow cross-origin requests
app.use(express.json());

//  Swagger UI  '/docs'
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
const clientRoutes = require('./routes/clients.routes');
app.use('/api', clientRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('✅ Get Client Service is running!');
});

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
