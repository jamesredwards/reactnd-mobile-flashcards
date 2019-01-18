import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  //console.log("AXCTION.DECKS ", action.decks)
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      }
    case ADD_DECK:
      return {
        ...state,
        ...action.deck,
      }
    case ADD_CARD:
      const { card, deck } = action
      const { questions } = deck
      questions.push(card)
      const newDeck = { ...deck, questions }
      return {
        ...state,
        [action.deck.title]: newDeck
      }
    default:
      return state
  }
}

export default decks