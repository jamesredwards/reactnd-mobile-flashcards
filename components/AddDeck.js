import React, { Component } from "react"
import { connect } from "react-redux"
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { white, gray, green } from "../utils/colors"
import { addDeck } from "../actions"
import { saveDeckTitle } from "../utils/api"

class AddDeck extends Component {
  static navigationOptions = {
    title: "Add Deck"
  }

  state = {
    name: "",
  }

  reset = () => {
    this.setState({
      name: ""
    })
  }

  handleSubmit = () => {
    const { name } = this.state
    this.props.addNewDeck(name)
    saveDeckTitle(name)
    console.log("ADD DECK: ", this.props)
    this.props.navigation.navigate(name)
    this.reset()
  }

  render() {
    const { name } = this.state
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.label}>What is the name of your new deck?</Text>
          <TextInput
            style={styles.input}
            value={name}
            placeholder="Name of new deck"
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.startQuizBtn}
        >
          <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Add New Deck</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 5,
    height: 50,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subContainer: {
    margin: 20
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  input: {
    backgroundColor: white,
    width: 350,
    fontSize: 20,
    height: 50,
    padding: 10,
    borderRadius: 1,
    borderColor: gray,
    margin: 20
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
})


const mapDispatchToProps = dispatch => ({
  addNewDeck: (title) =>
    dispatch(addDeck(title))
});
export default connect(null, mapDispatchToProps)(AddDeck)