// src/routes/clients.routes.js

const express = require('express');
const router = express.Router();
const { createClient, getClientById } = require('../controllers/clients.controller');
const validateClient = require('../middlewares/validateClient');

/**
 * @swagger
 * /api/clients:
 *   post:
 *     description: Create a new client
 *     parameters:
 *       - in: body
 *         name: client
 *         description: The client to be created
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - email
 *           properties:
 *             name:
 *               type: string
 *             last_name:
 *               type: string
 *             email:
 *               type: string
 *             phone:
 *               type: string
 *     responses:
 *       201:
 *         description: Client successfully created
 */
router.post('/clients', validateClient, createClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     description: Get a client by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID  clint to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: details of the client
 *       404:
 *         description: Client not found
 */
router.get('/clients/:id', getClientById);

module.exports = router;
