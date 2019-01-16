import React, { Component } from 'react';
import { StyleSheet, Text, View, Platform, SafeAreaView, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { blue, green, lightblue, white, purple, azure } from './utils/colors'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import Quiz from './components/Quiz'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'

import AddDeck from './components/AddDeck'




function UdaciStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const Tabs = createBottomTabNavigator(
  {
    DeckList: {
      screen: DeckList,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Decks",
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name='ios-list' size={30} color={tintColor} />
        )
      })
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        )
      })
    }
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarOptions: {
      activeTintColor: blue,
      style: {
        height: 60,
        backgroundColor: white,
        shadowColor: "rgba(0, 0, 0, 0.24)",
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      },
      labelStyle: {
        paddingTop: 3,
        fontSize: 14,
        fontWeight: "bold"
      }
    }
  }
);


const MainNavigator = createStackNavigator(
  {
    Home: Tabs,
    Quiz: Quiz,
    DeckDetail: DeckDetail,
    AddCard: AddCard,
  },
  {
    initialRouteName: "Home",
    navigationOptions: ({ navigation }) => ({
      headerTintColor: white,
      headerStyle: { backgroundColor: blue },
      headerTitleStyle: { fontWeight: "bold" },
    })
  }
);

class App extends React.Component {

  render() {

    return (
      <Provider store={createStore(reducer)}>
        <UdaciStatusBar backgroundColor={blue} barStyle='light-content' />
        <SafeAreaView style={styles.container}>
          <MainNavigator />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App