import { FlatList, StyleSheet, TouchableHighlight, View } from 'react-native';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../actions';
import ComingSoonCard from './ComingSoonCard';

class ComingSoonCardList extends Component {
  setNativeProps( nativeProps ) {
    this.root.setNativeProps( nativeProps );
  }

  navigateToSynopsis = () => {
    // console.log('Navigating to synopsis-----');
    // console.log(this.props);
    const props = this.props;
    props.cmnSoonReducer.navigation.navigate( 'Synopsis' );
  }

  renderCard = ( { item, index } ) => (
    <TouchableHighlight onPress={ this.navigateToSynopsis }>
      <View ref={ component => ( this.root = component ) } >
        <ComingSoonCard item={ item } index={ index } />
      </View>
    </TouchableHighlight>
    );

  render() {
    // console.log('=====inside ComingSoonCardList====');
    // console.log(this.props.cmnSoonReducer.total);

    return (
      <FlatList
        style={ styles.container }
        data={ this.props.cmnSoonReducer.data }
        keyExtractor={ ( item, index ) => index }
        renderItem={this.renderCard}
      />
    );
  }
}
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#eeeeee',
  },
} );
const mapStateToProps = state => state;

export default connect( mapStateToProps, actions )( ComingSoonCardList );
