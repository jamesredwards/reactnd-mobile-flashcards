import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { green, red, white } from "../utils/colors";

function QuizButtons({ saveAnswer }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>How did you do?</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: green }]}
          onPress={() => saveAnswer(true)}
        >
          <Text style={{ color: white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: red }]}
          onPress={() => saveAnswer(false)}
        >
          <Text style={{ color: white, fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Incorrect</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  button: {
    padding: 20,
    borderRadius: 7,
    height: 60,
    width: 300,
    margin: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttons: {
    justifyContent: "space-between",
    marginTop: 20
  },
});

export default QuizButtons;