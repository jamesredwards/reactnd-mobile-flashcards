import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { white, gray, green, blue } from "../utils/colors";

function between(n, low, high) {
  return (n >= low && n <= high)
}

function getMessage(score) {
  if (between(score, 0, 0.25)) {
    return "Did you even study?!"
  }
  if (between(score, 0.26, 0.5)) {
    return "More work to do on this one!"
  }
  if (between(score, 0.51, 0.75)) {
    return "Getting there, keep at it!"
  }
  if (between(score, 0.76, 0.99)) {
    return "Great work, nearly perfect!"
  }
  else if (score === 1.0) {
    return "Great work genius!"
  }
  else {
    return "I'm not sure what to do with that score!"
  }
}

export default function Results({ correct, incorrect, restartQuiz, navigation }) {
  const score = correct / (correct + incorrect)
  const message = getMessage(score)


  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.header}>You scored</Text>
        <Text style={styles.score}>{(score * 100).toFixed(0)}%</Text>
        <Text style={styles.message}>{message}</Text>
        <TouchableOpacity
          onPress={() => restartQuiz()}
          style={styles.startQuizBtn}
        >
          <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Retake Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.addCardBtn}
        >
          <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Back to Deck</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 5,
    width: 250,
    margin: 10,
    alignItems: 'center',
    backgroundColor: green,
    padding: 20,
  },
  numCards: {
    fontSize: 20,
    textAlign: 'center',
    color: blue,
    marginBottom: 5,
  },
  header: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: 'bold',
  },
  score: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: 'bold',
    color: blue,
  },
  message: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5,
    color: blue,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: white,
    borderColor: blue,
    borderRadius: 4,
    borderWidth: 0.5,
    alignItems: 'center',
    height: 100,
  },
  startQuizBtn: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    width: 300,
  },
  addCardBtn: {
    backgroundColor: gray,
    padding: 10,
    borderRadius: 7,
    height: 60,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    width: 300,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    height: 50,
  },
})