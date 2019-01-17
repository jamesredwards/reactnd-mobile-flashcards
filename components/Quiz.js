import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import QuizButtons from './QuizButtons'
import { white, blue } from '../utils/colors'
import TextButton from '../components/TextButton'
import Results from '../components/Result'
import { clearLocalNotifications, setLocalNotification } from '../utils/helpers'

class Quiz extends Component {

  state = {
    correctCount: 0,
    incorrectCount: 0,
    score: 0,
    questionIdx: 0,
    displayResults: false,
    displayAnswer: false,
  }

  reset = () => {
    this.setState({
      correctCount: 0,
      incorrectCount: 0,
      questionIdx: 0,
      score: 0,
      displayResults: false,
      displayAnswer: false,
    })
  }

  showAnswer = () => {
    this.setState(({
      displayAnswer: !this.state.displayAnswer
    }))
  }

  saveAnswer = (correct) => {
    const deck = this.props.navigation.getParam("deck")
    let { correctCount, incorrectCount, questionIdx, displayResults, displayAnswer } = this.state

    if (correct) {
      correctCount += 1
    }
    else {
      incorrectCount += 1
    }

    if (questionIdx === deck.questions.length - 1) {
      displayResults = true
      //disable today's notification then set notification that quiz completed
      clearLocalNotifications()
      setLocalNotification()
    }

    questionIdx += 1

    this.setState({
      correctCount,
      incorrectCount,
      questionIdx,
      displayResults,
      displayAnswer,
    })
  }

  render() {
    const deck = this.props.navigation.getParam("deck")

    const { correctCount, incorrectCount, questionIdx, displayResults } = this.state
    const numQuestions = deck.questions.length

    return !displayResults ? (
      <View style={styles.container}>
        <View>
          {this.state.displayAnswer
            ?
            (<TouchableOpacity
              style={styles.card}
              onPress={() => this.showAnswer()}
            >
              <Text style={styles.questionText}>{deck.questions[questionIdx].answer}</Text>
              <Text style={styles.infoText}>{questionIdx + 1} of {numQuestions}</Text>
            </TouchableOpacity>)
            :
            (<TouchableOpacity
              style={styles.card}
              onPress={() => this.showAnswer()}
            >
              <Text style={styles.questionText}>{deck.questions[questionIdx].question}</Text>
              <Text style={styles.infoText}>{questionIdx + 1} of {numQuestions}</Text>
            </TouchableOpacity>)

          }
        </View>
        <QuizButtons saveAnswer={this.saveAnswer} />
        <View style={styles.reset}>
          <TextButton style={{ padding: 50, fontSize: 15 }} onPress={this.reset}>
            Restart Quiz
        </TextButton>
        </View>
      </View>)
      : (
        <Results
          correct={correctCount}
          incorrect={incorrectCount}
          restartQuiz={this.reset}
          navigation={this.props.navigation}
        />
      )
  }
}

const styles = StyleSheet.create({
  reset: {
    textAlign: 'center'
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white,
    borderColor: blue,
    borderRadius: 4,
    borderWidth: 0.5,
  },
  card: {
    padding: 20,
    backgroundColor: white,
    borderColor: blue,
    borderRadius: 4,
    borderWidth: 0.5,
    height: 100,
  },
  questionText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 5
  },
  infoText: {
    fontSize: 15,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5
  },
})

export default Quiz