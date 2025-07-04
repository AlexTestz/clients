// src/routes/clients.routes.js

const express = require('express');
const router = express.Router();
const { createClient, getClientById } = require('../controllers/clients.controller');
const validateClient = require('../middlewares/validateClient');

/**
 * @swagger
 * /api/clients:
 *   post:
 *     description: Crea un nuevo cliente
 *     parameters:
 *       - in: body
 *         name: client
 *         description: El cliente que se va a crear
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
 *         description: Cliente creado exitosamente
 */
router.post('/clients', validateClient, createClient);

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     description: Obtiene un cliente por su ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID del cliente
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Detalles del cliente
 *       404:
 *         description: Cliente no encontrado
 */
router.get('/clients/:id', getClientById);

module.exports = router;
