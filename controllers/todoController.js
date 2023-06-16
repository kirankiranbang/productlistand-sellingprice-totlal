const Todo = require('../models/todoModel');

exports.createUser = async (req, res) => {
  const { productName, sellingPrice } = req.body;

  try {
    // Check if productName and sellingPrice are provided
    if (!productName || !sellingPrice) {
      return res.status(400).json({ message: 'Product name and selling price are required' });
    }

    // Create a new Todo item
    const todo = await Todo.create({
      productName,
      sellingPrice
    });

    res.json({ message: 'Todo item created successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create todo item' });
  }
};

exports.getTodos = async (req, res) => {
  try {
    // Fetch all Todo items from the database
    const todos = await Todo.findAll();

    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch todo items' });
  }
};



exports.deleteTodo = async (req, res) => {
  const todoId = req.params.id;

  try {
    // Find the todo item by ID
    const todo = await Todo.findByPk(todoId);

    if (!todo) {
      return res.status(404).json({ message: 'Todo item not found' });
    }

    // Delete the todo item from the database
    await todo.destroy();

    res.status(200).json({
      success: true,
      message: 'Todo item deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting todo item:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting todo item'
    });
  }
};
