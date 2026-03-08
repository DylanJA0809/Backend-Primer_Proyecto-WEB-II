const express = require('express');
const router = express.Router();

const { vehiclePost, vehicleGet, vehiclePut, vehicleDelete } = require('../controllers/vehicleController');

const { authenticateToken } = require('../controllers/authJWT');

// POST - Create vehicle
router.post('/vehicle', authenticateToken, vehiclePost);

// GET - Get all vehicles, get by id, or filter vehicles
router.get('/vehicle', vehicleGet);

// PUT - Update vehicle
router.put('/vehicle', authenticateToken, vehiclePut);

// DELETE - Delete vehicle
router.delete('/vehicle', authenticateToken, vehicleDelete);

module.exports = router;