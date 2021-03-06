import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Alert } from "react-native";

const AddToDo = ({ onSubmit }) => {
  const [text, setText] = useState("");
  const pressHandler = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    } else {
      //error
      Alert.alert("Enter task");
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="enter task"
        autoCorrect={false}
      />
      <Button title="Add" style={styles.text} onPress={pressHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3949ab",
    paddingBottom: 10,
    marginBottom: 15,
  },
  text: {
    color: "#008B8B",
    fontSize: 20,
  },
  input: {
    width: "60%",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#394999",
    color: "white",
    fontSize: 20,
    marginRight: "5%",
  },
});

export default AddToDo;
