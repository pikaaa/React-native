import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
  };


  render() {
    console.log('===Inside===');
    return (
      <View>
      <Text> 'Its Details' </Text>
      <Text> 'hdhkhdlxhshdhsdjkhjhshhshsh'</Text>
      </View>
    );
  }
}

export default Details;
