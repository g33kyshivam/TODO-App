// Creating A Express Router 
const express = require('express');
const router = express.Router();

// Export this Router
module.exports = router;

// Importing Controller
const taskController = require('../controller/taskController');
// Defining Routes 


router.post('/create', taskController.createTask);
router.get('/delete', taskController.deleteTask);

