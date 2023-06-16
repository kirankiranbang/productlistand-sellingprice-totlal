
const todoRoutes = require('./routes/todoRoutes');

const sequelize = require('./util/database');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
// app.use('/product', express.static('public'));


//http://localhost:3000/product/login

//hoisting through this path 
 app.use('/product/login', express.static('public/signup.html'));
app.use('/product', todoRoutes);



sequelize.sync()
  .then(() => {
    console.log('Models synchronized with the database.');

    // Start the server
    const port = 3000;
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to synchronize models with the database:', error);
  });