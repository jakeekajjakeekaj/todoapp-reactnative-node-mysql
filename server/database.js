import mysql from 'mysql2';
// dotenv es para las variables de entorno
import dotenv from 'dotenv';
dotenv.config();  //INICIALIZA dotenv

// SE CREA UN "POOL" DE CONEXIONES, un pool de conexiones es una forma de gestionar múltiples conexiones a la base de datos para mejorar el rendimiento y la eficiencia
const pool = mysql
  .createPool({
    // MYSQL_HOST y todas las demás que están en mayúsculas son variables de entorno alojadas dentro del .env
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.MYSQL_PASSWORD,
    database : process.env.MYSQL_DATABASE,
  })
  .promise();
  // promise facilita el uso de async/await para el uso de funciones asíncronas y así nos olvidamos del callback

// DE ESTA MANERA YA NOS DEBERIAMOS PODER CONECTAR A LA DB

// export async function getTodoByID(id) {
//   const [row] = await pool.query(
//     // DATO INTERESANTE, AQUÍ NOSOTROS PUDIMOS HABER ESCRITO ${id} y se acaba, sin embargo por medida de seguridad si ellos nos meten código SQL dentro de la variable, es posible que extraigan información de nuestra DB, por lo que hacerlo de la siguiente manera, es decir con ? y después indicar la variable entre corchetes es mejor
//     `SELECT * FROM todos WHERE id = ?`, [id]
//   )
//   // console.log(row);  // Al ver que si funciona podemos comentar esta linea
//   return row[0];
// }

// Ahora dentro de la consola podemos escrbiri node database.js para ejecutar así este JS, sin embargo no hará nada hasta que escribamos getTodoByID(1); y ahora sí se podrá

// getTodoByID(1);  // Al comprobar que funciona, podemos comentar esta linea

// ** COMIENZA LA BUENO, LO DE ARRIBA ERAN PRUEBAS PARA COMPROBAR QUE TODO ESTUVIERA OK **
// Ahora insertaremos aquí ls consultas SQL que habiamos probado con anterioridad en nuestro schema.sql y haciendo los cambios en vivo con nuestra DB

export async function getTodosByID(id) {
  const [rows] = await pool.query(
    `
      SELECT todos.*, shared_todos.shared_with_id
      FROM todos
      LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
      WHERE todos.user_id = ? OR shared_todos.shared_with_id = ?
    `,
    [id, id]
  );
  return rows;
}

// La función de abajo es la que se acaba de realizar arriba
export async function getTodo(id) {
  const [rows] = await pool.query(
    `SELECT * FROM todos WHERE id = ?`, [id]
  );
  return rows[0];
}

export async function getSharedTodoByID(id) {
  const [rows] = await pool.query(
    `
      SELECT * FROM shared_todos WHERE todo_id = ?
    `, [id]
  );
  return rows[0];
}

export async function getUserByID(id) {
  const [rows] = await pool.query(
    `
      SELECT * FROM users WHERE id = ?
    `, [id]
  );
  return rows[0];
}

export async function getUserByEmail(email) {
  const [rows] = await pool.query(
    `
      SELECT * FROM users WHERE email = ?
    `, email
  );
  return rows[0];
}

export async function createTodo(user_id, title) {
  const [result] = await pool.query(
    `
      INSERT INTO todos (user_id, title)
      VALUES (?, ?)
    `, [user_id, title]
  );
  const todoID = result.insertId;
  return getTodo(todoID);
}

export async function deleteTodo(id) {
  const [result] = await pool.query(
    `
      DELETE FROM todos WHERE id = ?;
    `, [id]
  );
  return result;
}

export async function toggleCompleted(id, value) {
  const newValue = value === true ? "TRUE" : "FALSE";
  const [result] = await pool.query(
    `
      UPDATE todos
      SET completed = ${newValue}
      WHERE id = ?;
    `, [id]
  );
  return result;
}

export async function shareTodo(todo_id, user_id, shared_with_id) {
  const [result] = await pool.query(
    `
      INSERT INTO shared_todos (todo_id, user_id, shared_with_id)
      VALUES (?, ?, ?);
    `, [todo_id, user_id, shared_with_id]
  );
  return result.insertId;
}