CREATE DATABASE todo_app;

USE todo_app;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255)
);

-- SHOW TABLES; Muestra las tablas creadas

CREATE TABLE todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255),
  completed BOOLEAN DEFAULT false,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ON DELETE CASCADE INDICARÍA QUE SE ELIMINARÍAN TODOS LOS TODOS QUE EL USUARIO CREÓ EN CASO DE QUE UN USUARIO SEA ELIMINADO

CREATE TABLE shared_todos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  todo_id INT,
  user_id INT,
  shared_with_id INT,
  FOREIGN KEY (todo_id) REFERENCES todos(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (shared_with_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Insert 2 users into the users table
INSERT INTO users (name, email, password) VALUES ('Beto', 'user1@example.com', 'password1');
INSERT INTO users (name, email, password) VALUES ('Alberto', 'user2@example.com', 'password2');

-- SELECT * FROM users WHERE id = 1;


-- Insert todos into the todos table, associated with the first users table
INSERT INTO todos (title, user_id)
VALUES
("Go for a morning run", 1),
("Work on project presentation", 1),
("Go grocery shopping", 1),
("Read 30 pages of book", 1),
("Ride bike to the park", 1),
("Cook dinner for family", 1),
("Practice Yoga", 1),
("Listen to a podcast", 1),
("Clean the house", 1),
("Get 8 hours of sleep", 1);

-- SELECT * FROM todos;
-- SELECT * FROM todos WHERE user_id = 1;

-- DESCRIBE shared_todos; Lo que hace esto es describir a la tabla, es decir los campos que contiene la misma

-- share todo 1 of user 1 with user 2
INSERT INTO shared_todos (todo_id, user_id, shared_with_id)
VALUES (1, 1, 2);


-- Get todos including shared todos by id
SELECT todos.*, shared_todos.shared_with_id
FROM todos
LEFT JOIN shared_todos ON todos.id = shared_todos.todo_id
-- Hasta aquí estamos haciendo una tabla que contenga de forma ordenada en donde los todos coincidan con el shared_todos.todo_id, es decir que coincidan los todos del mismo usuario
WHERE todos.user_id = [user_id] OR shared_todos.shared_with_id = [user_id];
-- Aquí filtramos los resultados para mostrar a los que han compartido o con los que se han compartido

-- Em largas palabras seleccionamos todos los todos y el shared_with_id, el FROM todos LEFT JOIN se encargar de realizar una unión del todos y a la derecha se coloca el shared_todos, sin embargo con el ON estamos indicando que únicamente coincide en donde el todos.id sea igual que el shared_todos.todo_id en donde todos.user_id = [user_id], el [user_id] vendría siendo un parámetro dinámico, el cuál cambiaremos durante la consulta, ejemplo al ejecutar el código en la consola, cambiamos [user_id] por un 2 por ejemplo y el OR el el típico OR que ya conocemos

