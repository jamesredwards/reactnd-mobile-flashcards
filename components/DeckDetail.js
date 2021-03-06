import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { green, blue, white, gray } from '../utils/colors'
import { connect } from 'react-redux'

class DeckDetail extends Component {

  static navigationOptions = ({ navigation }) => {
    const { title } = navigation.state.params
    return {
      title: title,
    }
  }

  render() {

    const { deck, navigation } = this.props
    console.log(deck)
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

function mapStateToProps(state, { navigation }) {
  const { title } = navigation.state.params
  return {
    deck: state[title]
  }
}

export default connect(mapStateToProps)(DeckDetail);

const styles = StyleSheet.create({
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