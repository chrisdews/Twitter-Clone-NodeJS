import express from 'express';
import db from './db/db';
// Set up the express app
const app = express();
// get all todos
const PORT = 5000;

app.get('/api/v1/todos', (req, res) => {
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});