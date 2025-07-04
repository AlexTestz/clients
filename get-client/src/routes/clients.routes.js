const express = require('express');
const router = express.Router();

const {
  getAllClients,
  getClientById
} = require('../controllers/clients.controller');


/**
 * @swagger
 * /api/clients:
 *   get:
 *     description: get all clients
 *     responses:
 *       200:
 *         description: clients list
 */
router.get('/clients', getAllClients);
/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     description: get a client by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID  client to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: client details
 *       404:
 *         description: Client not found
 */
router.get('/clients/:id', getClientById); 

module.exports = router;
