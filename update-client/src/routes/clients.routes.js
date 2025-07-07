const express = require('express');
const router = express.Router();
const { updateClient } = require('../controllers/clients.controller');
const validateClientUpdate = require('../middlewares/validateClientUpdate');


/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     description: Update a clients's information by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the client to be updated
 *         schema:
 *           type: string
 *       - in: body
 *         name: client
 *         description: Updated client information
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - last_name
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
 *       200:
 *         description: client updated successfully
 *       404:
 *         description: client not found
 *       409:
 *         description: The email address is already in use by another customer.
 */

// Validate client update data
router.put('/clients/:id', validateClientUpdate, updateClient);

module.exports = router;
// This file defines the routes for updating clients.
// It uses validation middleware and the controller to handle PUT requests to /clients/:id.