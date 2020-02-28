import {createStore, applyMiddleware, combineReducers} from 'redux';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {Provider, connect} from 'react-redux';
import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../containers/Home';
import Restaurant from '../containers/Restaurant'

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Restaurant: {
    screen: Restaurant,
  },
});

const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.nav,
);

const App = createReduxContainer(AppNavigator);

const mapStateToProps = state => ({
  state: state.nav,
});
const RootNavigator = connect(mapStateToProps)(App);

export {RootNavigator, AppNavigator, navigationMiddleware};
