import express from "express";
// IMPORTAMOS TODAS LAS QUERYS CREADAS EN database.js
import {
  getTodo,
  shareTodo,
  deleteTodo,
  getTodosByID,
  createTodo,
  toggleCompleted,
  getUserByEmail,
  getUserByID,
  getSharedTodoByID,
} from "./database.js";

const app = express();
app.use(express.json());

app.listen(8080, ()=> {
  console.log("Server running on port 8080");
});