export function handleInitialData() {
  return (dispatch) => {
    return getDecks()
      .then(({ decks }) => {
        dispatch(receiveDecks(decks))
      })
  }
}