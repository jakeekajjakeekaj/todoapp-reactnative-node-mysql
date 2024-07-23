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

import cors from 'cors';  // Cors sirve para especificar de quién queremos recibir requests

const corsOptions = {
  origin : ['http://127.0.0.1:8081', 'http://localhost:8081'],  // Especifica el origen permitido (es decir quién podrá tener acceso a la API), aquí solo permitimos en forma local, pero usualmente aquí suele ir el dominio
  // origin: function (origin, callback) {
  //   if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  methods : ["GET", "POST", "PUT", "DELETE"],  // Especifica los mpetodos permitidos
  credentials : true, // Permite enviar credenciales (cookies, autenticaciones)
};
const app = express();
app.use(express.json());
app.use(cors(corsOptions));

// COMENZAMOS CON EL USO DE NUESTRAS IMPORTACIONES

// -- GET --

app.get("/todos/:id", async(req, res)=> {
  const { id } = req.params;  //Desestructuracion de objetos

  const todos = await getTodosByID(id);
  res.status(200).send(todos);
});

app.get("/todos/shared_todos/:id", async(req, res)=> {
  // const { id } = req.params;
  // const { user_id } = todo;
  // const { shared_with_id } = todo;
  const { id } = req.params;

  const todo = await getSharedTodoByID(id);
  const author = await getUserByID(todo.user_id);
  const shared_with = await getUserByID(todo.shared_with_id);

  console.log("juas juas");
  res.status(200).send({ author, shared_with });
});

app.get("/users/:id", async(req, res)=> {
  const { id } = req.params;

  const user = await getUserByID(id);
  res.status(200).send(user);
});

// -- PUT --

app.put("/todos/:id", async(req, res)=> {
  const { id } = req.params;
  const { value } = req.body;

  const todo = await toggleCompleted(id, value);
  res.status(200).send(todo);
});

// -- DELETE --

app.delete("/todos/:id", async(req, res)=> {
  const { id } = req.params;

  await deleteTodo(id);
  res.send({ message : "Todo deleted successfully" });
});

// -- POST --

app.post("/todos/shared_todos", async(req, res)=> {
  const { todo_id, user_id, email } = req.body;

  const userToShare = await getUserByEmail(email);
  const sharedTodo = await shareTodo(todo_id, user_id, userToShare.id);
  res.status(201).send(sharedTodo); // 201 the request was successfully fulfilled
});

app.post("/todos", async(req, res)=> {
  const { user_id, title } = req.body;

  const todo = await createTodo(user_id, title);
  res.status(201).send(todo);
});

const PUERTO = process.env.PORT || 8080;

app.listen(PUERTO, ()=> {
  console.log(`Server running on port ${PUERTO}`);
});

// HASTA AQUÍ YA HEMOS CREADO NUESTRA API LISTA PARA SER USADA DEL LADO FRONT, ASÍ MISMO GRACIAS A CORS LIMITAMOS EL ACCESO A LA API Y MEJORAMOS NUESTRA SEGURIDAD