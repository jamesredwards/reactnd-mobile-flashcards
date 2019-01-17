import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native'
import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { blue } from '../utils/colors'
import Deck from './Deck'

class DeckList extends Component {
  state = {
    decksReceived: false,
  }

  componentDidMount() {
    getDecks()
      .then((decks) => this.props.dispatch(receiveDecks(decks)))
      .then((decks) => { this.setState({ decksReceived: decks !== null }) })
  }

  render() {

    const { decks, navigation } = this.props

    //taking time, show a loading signal
    if (!this.state.decksReceived) {
      return (
        <View style={[styles.container, styles.horizontal]}>
          <Text style={styles.text}>Loading...</Text>
          <ActivityIndicator size="large" color={blue} />
        </View>
      )
    }

    //we have cards in the deck
    if (Object.values(decks).length > 0) {
      return (
        <View style={styles.container}>
          <FlatList
            data={Object.values(decks)}
            renderItem={({ item }) => (
              <Deck
                title={item.title}
                numQuestions={item.questions.length}
                navigation={navigation}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )
    }
    else {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>No cards in this deck yet!</Text>
        </View>
      )
    }
  }
}

function mapStateToProps(decks, { navigation }) {
  return {
    decks: decks,
    navigation: navigation,
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 22,
    color: blue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  horizontal: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10
  }
})

//export default connect(mapStateToProps, mapDispatchToProps)(DeckList)
export default connect(mapStateToProps)(DeckList)