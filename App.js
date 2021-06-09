import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import AddToDo from "./src/AddToDo";
import Navbar from "./src/Navbar";
import ToDo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (title) => {
    setTodos((prev) => [...prev, { id: Date.now().toString(), title }]);
  };
  return (
    <View style={styles.container}>
      <Navbar title="ToDo app" />
      <AddToDo onSubmit={addTodo} />
      <View style={styles.todo}>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  todo: {
    alignItems: "center",
    justifyContent: "center",
  },
});
