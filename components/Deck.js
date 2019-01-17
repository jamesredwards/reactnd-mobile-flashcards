import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import { blue, white } from '../utils/colors'

export default function Deck({ title, numQuestions, navigation }) {

  return (
    <TouchableOpacity
      style={[styles.container, styles.center]}
      onPress={() => navigation.navigate('DeckDetail', { title: title })}
    >
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.numCards}>{numQuestions} {numQuestions === 1 ? 'card' : 'cards'}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  numCards: {
    fontSize: 20,
    textAlign: 'center',
    color: blue,
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 5
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    borderColor: blue,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5
  },
})