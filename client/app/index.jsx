import { StyleSheet, FlatList, SafeAreaView, Text, View } from "react-native";
import { useEffect, useState } from "react";
import Task from "../components/Task";

export default function Index() {

  // useState es un hook que prmite añadir un estado local a componentes funcionales, para este caso estamos inicializando a todos como un arreglo vacío y setTodos será el que contendrá a los nuevos valores para agregarlos dentro de todos
  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    fetchData();
  }, []); // Este HOOK lo que hace es que gracias al hook de useEffect se indica que será ejecutado por aparte durante el mismo proceso, es decir realiza efectos secundarios en componentes funcionales y ocurren fuera del flujo principal de renderizado, al indicar [] se indica que solo será ejecutado una vez, si tuviéramos dependencias dentro de [dependency1, dependency2] se estaría indicando que se ejecutará cada que ocurran cambios en estas dpeendencias, pero al estar vacío solo actuaría como un inicializador para obtener por primeravez ciertos datos

  async function fetchData() {
    // const response = await fetch("http://192.168.1.75:8080/todos/1");
    // const data = await response.json();
    // setTodos(data);

    try {
      const response = await fetch("http://192.168.1.75:8080/todos/1");
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      const data = await response.json();
      // const data = await response.json();
      setTodos(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  function clearTodo(id) {
    setTodos(todos.filter((todo)=> todo.id !== id));
  }
    
  function toggleTodo(id) {
    setTodos(
      todos.map((todo)=>
      todo.id === id
        ? {...todo, completed: todo.completed === 1 ? 0 : 1}
        : todo
      )
    );
  }

  return (
    <View
      // style={{
      //   flex: 1,
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
      style={styles.container}
      >
      <SafeAreaView>
        <FlatList 
          data={todos}
          keyExtractor={(todo)=> todo.id}
          renderItem={({ item })=> 
            <Task {...item} toggleTodo={toggleTodo} clearTodo={clearTodo} />}
          ListHeaderComponent={()=> <Text style={styles.title}>Today</Text>}
          contentContainerStyle={styles.contentContainerStyle}
        />
      </SafeAreaView>
      {/* Lo que es 'null, 2' únicamente es para darle más formato a JSON en string y que sea más legible */}
      {/* <Text>{ JSON.stringify(todos, null, 2) }</Text> */}
      {/* <Text>{ "Hola" }</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#efefef",
    // alignItems: "center",
    // justifyContent: "center",
  },
  contentContainerStyle : {
    padding: 15,
  },
  title : {
    fontWeight: "800",
    fontSize: 28,
    marginBottom: 15,
  },
});