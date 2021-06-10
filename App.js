import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import AddToDo from "./src/AddToDo";
import Navbar from "./src/Navbar";
import ToDo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }]);
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <View style={styles.container}>
      <Navbar title="ToDo app" />
      <AddToDo onSubmit={addTodo} />
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        style={styles.todo}
        data={todos}
        renderItem={({ item }) => <ToDo todo={item} onRemove={removeTodo} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  todo: {
    marginLeft: "15%",
  },
});
