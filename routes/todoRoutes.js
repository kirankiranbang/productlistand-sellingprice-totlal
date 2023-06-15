// todoRoutes.js

const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Route for creating a new todo item
router.post('/login', todoController.createUser);
// router.post('/login', todoController.createUser);
// // Route for retrieving all todo items
router.get('/logindata', todoController.getTodos);

module.exports = router;
