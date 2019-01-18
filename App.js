import React, { Component } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native'
import { Constants } from 'expo'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { blue, white } from './utils/colors'
import { Entypo } from '@expo/vector-icons'
import DeckList from './components/DeckList'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import Quiz from './components/Quiz'
import { setLocalNotification } from './utils/helpers'


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
          <Entypo name='list' size={30} color={tintColor} />
        )
      })
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Add Deck",
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="squared-plus" size={30} color={tintColor} />
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
        height: 70,
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
      headerTitleStyle: { color: white, fontWeight: "bold" },
    })
  }
)

class App extends Component {

  componentDidMount() {
    setLocalNotification()
  }

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
  bottomTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch'
  }
});

export default App