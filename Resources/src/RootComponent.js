/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions';
// import * as actions from './Resources/actions';
import ComingSoonCardList from '../components/ComingSoonCardList';

class RootComponent extends Component {
  static navigationOptions = {
    title: 'Coming Soon',
  };

  componentDidMount() {
    this.fetchInitialData();
    console.log( 'ROOTCOMPONENT::::' );
  }
  // API CALLS
  fetchInitialData = () => {
    this.executeQuery( 'https://data-in.bookmyshow.com/index.bms?cmd=COMINGSOON&cnt=500&f=json&lg=&lng=&lt=&mm=10&pg=1&rc=MUM&t=67x1xa33b4x422b361ba&yy=2017' );
  };

  executeQuery = ( query ) => {
    console.log( '======executeQuery=====' );
    fetch( query )
    .then( response => response.json() )
    .then( ( json ) => {
      this.handleResponse( json.BookMyShow );
    } )
    .catch( error =>
        console.log( error ),
       );
  };

  handleResponse = ( response ) => {
    // console.log('=====received response=====');
    // console.log(response);
    // console.log('=====received props in rootcomponent=====');
    // console.log(this.props);
    const props = this.props;
    props.loadData( response.Events.length, response.Events );
    props.nav( props.navigation );
    // console.log(response);
    // console.log('=====ended response=====');
    // console.log(this.props);
  };

  render() {
    return (
      <ComingSoonCardList />
    );
  }
}

const mapStateToProps = state => state;
export default connect( mapStateToProps, actions )( RootComponent );
