// src/routes/clients.routes.js

const express = require('express');
const router = express.Router();
const { deleteClient } = require('../controllers/clients.controller');

/**
 * @swagger
 * /api/clients/{id}:
 *   delete:
 *     description: delete a client by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID client to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: client successfully deleted
 *       404:
 *         description: Client not found
 */
router.delete('/clients/:id', deleteClient);

module.exports = router;
