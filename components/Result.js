import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { purple, white, gray, green, blue } from "../utils/colors";

export function Results({ correct, incorrect, restartQuiz, navigation }) {
  const score = correct / (correct + incorrect)
  return (
    <View style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.name}>You scored</Text>
        <Text style={styles.text}>{score.toFixed(0) * 100}%</Text>
        <TouchableOpacity
          onPress={() => restartQuiz()}
          style={styles.startQuizBtn}
        >
          <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Retake Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate.goBack()}
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
  name: {
    fontSize: 35,
    textAlign: "center",
    marginBottom: 5,
    fontWeight: 'bold',
  },
  text: {
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
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
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
  AndroidSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
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