import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

class Synopsis extends Component {
  static navigationOptions = {
    title: 'Synopsis',
  };

  navigateToSynopsisDetails = () => {

    this.props.navigation.navigate('SynopsisDetails');
  }
  render() {
    console.log('====Details===');
    console.log(this.props);
    return (
      <TouchableHighlight onPress={this.navigateToSynopsisDetails}>
      <View>
      <Text> 'Its Synopsis' </Text>
      <Text> 'hdhkhdlxhshdhsdjkhjhshhshsh'</Text>
      </View>
      </TouchableHighlight>
    );
  }
}

export default Synopsis;
