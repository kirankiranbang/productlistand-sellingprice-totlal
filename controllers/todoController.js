const Todo = require('../models/todoModel');

exports.createUser = async (req, res) => {
  const { name, description } = req.body;

  try {
    // Check if name and description are provided
    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' });
    }

    // Create a new Todo item
    const todo = await Todo.create({
      name,
      description
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
