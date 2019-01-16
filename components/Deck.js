import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, SafeAreaView, TouchableOpacity } from 'react-native'
import { blue, white, purple } from '../utils/colors'

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
  deckTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: blue
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    borderColor: blue,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: blue,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
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
    marginTop: 5
  },
})