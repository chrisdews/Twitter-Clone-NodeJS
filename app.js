import express from "express";
import db from "./db/db";
// Set up the express app
import bodyParser from "body-parser";
// bodyParser - parses JSON data to make available with req.body.xxx
const app = express();
// get all todos
const PORT = 5000;

app.get("/api/v1/todos", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "todos retrieved successfully",
    todos: db
  });
});

app.post("/api/v1/todos", (req, res) => {
  if (!req.body.title) {
    return res.status(400).send({
      sucess: "false",
      message: "title is required"
    });
  } else if (!req.body.description) {
    return res.status(400).send({
      success: "false",
      message: "description is required"
    });
  }
  const todo = {
    id: db.length + 1,
    title: req.body.title,
    description: req.body.description
  };
  db.push(todo);
  return res.status(201).send({
    success: "true",
    message: "todo added successfully",
    todo
  });
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
