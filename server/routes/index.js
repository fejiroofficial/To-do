/* eslint linebreak-style: "off" */

import express from 'express';
const todosController = require('../controllers').todos;
const todoItemsController = require('../controllers').todoItems;


const router = express.Router();

router.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));  

router.route('/api/todos')
.post(todosController.create)
.get(todosController.list);

router.post('/api/todos/:todoId/items', todoItemsController.create);

router.route('/api/todos/:todoId')
.get(todosController.retrieve)
.put(todosController.update)
.delete(todosController.destroy);

router.route('/api/todos/:todoId/items/:todoItemId')
.put(todoItemsController.update)
.delete(todoItemsController.destroy);

// For any other request method on todo items, we're going to return "Method Not Allowed"
router.all('/api/todos/:todoId/items', (req, res) =>
  res.status(405).send({
    message: 'Method Not Allowed',
}));

export default router;
