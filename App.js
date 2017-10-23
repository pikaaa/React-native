/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import RootComponent from './Resources/src/RootComponent';
import Synopsis from './Resources/src/Synopsis';
import Details from './Resources/src/Details';
import reducers from './Resources/reducers';

const MainScreen = StackNavigator( {
  Home: { screen: RootComponent },
  Synopsis: { screen: Synopsis },
  SynopsisDetails: { screen: Details },
} );

const App = () => (
  <Provider store={ createStore( reducers ) } >
    < MainScreen />
  </Provider>
  );

export default App;
