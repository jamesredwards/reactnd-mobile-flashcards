import React, { Component } from "react"
import { connect } from "react-redux"
import { KeyboardAvoidingView, View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native"
import { white, gray, green } from "../utils/colors"
import { addCard } from "../actions"
import { addCardToDeck } from "../utils/api"

class AddCard extends Component {
  static navigationOptions = () => ({
    title: "Add Card"
  })

  state = {
    question: "",
    answer: ""
  }

  reset = () => {
    this.setState({
      question: "",
      answer: ""
    })
  }

  handleSubmit = () => {
    const { deck } = this.props.navigation.state.params
    const { question, answer } = this.state
    this.props.addNewCard(deck, question, answer)
    addCardToDeck(deck, { question, answer })
    this.props.navigation.goBack()
    this.reset()
  }

  render() {
    const { question, answer } = this.state
    return (
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.label}>Question</Text>
          <TextInput
            style={styles.input}
            value={question}
            placeholder="Enter your question..."
            onChangeText={question => this.setState({ question })}
          />
        </View>
        <View style={styles.element}>
          <Text style={styles.label}>Answer</Text>
          <TextInput
            style={styles.input}
            value={answer}
            placeholder="The answer..."
            onChangeText={answer => this.setState({ answer })}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.startQuizBtn}
        >
          <Text style={[{ color: white, fontSize: 20, textAlign: 'center' }, styles.center]}>Add Card</Text>
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
  addNewCard: (deck, question, answer) =>
    dispatch(addCard({ question, answer }, deck))
});
export default connect(null, mapDispatchToProps)(AddCard)