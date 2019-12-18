import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import React from "react";
import HomeScreen from "./pages/HomeScreen";
import OverviewScreen from "./pages/OverviewScreen";
import AuthLoadingScreen from "./pages/AuthLoadingScreen";
import ChatScreen from "./pages/ChatScreen";
import { Linking } from 'expo';

const FriendsStack = createStackNavigator({
  Overview: { screen: OverviewScreen },
  Chat: {
    screen: ChatScreen,
    path: 'chat',
  },
});
const AuthStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Friends: {
    screen: FriendsStack,
    path: 'auth-friends',
  },
});

const AppStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Friends: {
    screen: FriendsStack,
    path: 'app-friends',
  },
});

const AuthSwitch = createAppContainer(createStackNavigator({
  AuthLoading:  { screen: AuthLoadingScreen },
  App: {
    screen: AppStack,
    path: '',
  },
  Auth: { screen: AuthStack },
}));

const prefix = Linking.makeUrl('/');
const App = () => <AuthSwitch uriPrefix={prefix} />;
export default App;
