import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'test4'

const initialData = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  },
}

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(result => {
      if (result !== null) {
        return JSON.parse(result)
      }
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(initialData))
      return initialData
    })
}

export function getDeck(id) {
  return getDecks()
    .then((decks) => decks[id])
}

export function saveDeckTitle(title) {
  const deck = { title: title, questions: [] }
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [title]: deck
  }))
}

export function addCardToDeck(title, card) {
  return getDecks()
    .then((decks) => {
      decks[title].questions.push(card)
      AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(decks))
    })
}