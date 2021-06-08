import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const AddToDo = () => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Add" style={styles.text} />
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
  },
  text: {
    color: "white",
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
