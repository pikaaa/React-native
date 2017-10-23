import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

class Synopsis extends Component {
  static navigationOptions = {
    title: 'Synopsis',
  };

  navigateToSynopsisDetails = () => {
    this.props.navigation.navigate('SynopsisDetails');
  }
  render() {
    return (
      <TouchableHighlight onPress={ this.navigateToSynopsisDetails }>
        <View>
          <Text> 'Its Synopsis' </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const mapStateToProps = state => state;
export default connect( mapStateToProps )( Synopsis );
