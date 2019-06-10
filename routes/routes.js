// Creating A Express Router 
const express = require('express');
const router = express.Router();

// Export this Router
module.exports = router;

// Importing Controller

const homeController = require('../controller/mainContoller');
// Defining the Routes

router.get('/', homeController.showHome);