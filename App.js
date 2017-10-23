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
// import * as actions from './Resources/actions';
// import ComingSoonCardList from './Resources/components/ComingSoonCardList';
import reducers from './Resources/reducers';

class App extends Component {

  static navigationOptions = {
      title: 'Coming Soon',
  };

  render() {
    console.log('In App::::');
    console.log(this.props);
    return (
      <Provider store={createStore(reducers)} >
        <RootComponent navigation={this.props} />
      </Provider>
    );
  }
}
// const mapStateToProps = state => state;
const MainScreen = StackNavigator({
  Home: { screen: App },
  Synopsis: { screen: Synopsis, },
  SynopsisDetails: { screen: Details }
});
export default MainScreen;
