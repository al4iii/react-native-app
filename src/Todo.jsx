import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ToDo = ({ todo, onRemove }) => {
  return (
    <TouchableOpacity
      onPress={() => console.log("press", todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.todo}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
    marginBottom: 15,
    width: "80%",
  },
  text: {},
});

export default ToDo;
