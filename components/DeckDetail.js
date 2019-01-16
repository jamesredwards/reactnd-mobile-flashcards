import React, { Component } from 'react'
import { Text, View, StyleSheet, Platform, SafeAreaView, TouchableOpacity, Button } from 'react-native'
import { green, blue, white, gray } from '../utils/colors'
import { connect } from 'react-redux'

class DeckDetail extends Component {
  render() {
    //console.log("DECK DETAIL ", this.props)
    const { deck, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.name}>{deck.title}</Text>
          <Text style={styles.text}>{deck.questions.length} questions available</Text>
          {deck.questions.length > 0 &&
            <TouchableOpacity
              onPress={() => navigation.navigate("Quiz", { deck })}
              style={styles.startQuizBtn}
            >
              <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Start Quiz</Text>
            </TouchableOpacity>
          }
          <TouchableOpacity
            onPress={() => navigation.navigate("AddCard", { deck })}
            style={styles.addCardBtn}
          >
            <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Add Cards to Deck</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, { navigation }) => ({
  deck: state[navigation.getParam("title")]
});

export default connect(mapStateToProps)(DeckDetail);

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