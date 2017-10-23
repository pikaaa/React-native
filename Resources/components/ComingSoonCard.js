import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image
} from 'react-native';
import MovieDetailsComponent from './MovieDetailsComponent';

export default class ComingSoonCard extends Component {
  render() {
    let imageURL = '';

    console.log('==CMNSSOONCARD===');
    const item = this.props.item;
    imageURL = `https://in.bmscdn.com/Events/Mobile/${item.ImageCode}.jpg`;

    return (
      <View style={styles.card}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <MovieDetailsComponent item={item} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  card: {
    flexDirection: 'row',
    height: 150,
    margin: 8,
    backgroundColor: 'white'
  },
  image: {
    margin: 8,
    width: 90,
    backgroundColor: 'red'
  }
});
