import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';

export default class MovieDetailsComponent extends Component {
  renderGenre = ( genreArr ) => {
    if (genreArr !== undefined) {
      return ( genreArr.map( ( genre ) => {
        return ( <Text style={ styles.genre }> { genre } </Text> );
      },
    ) );
    }
  }

  render() {

    const item = this.props.item;
    return (
      <View style={styles.container}>
        <Text numberOfLines={2}>{item.EventTitle}</Text>
        <Text numberOfLines={2}>{item.Actors}</Text>
        <Text>{item.Language}</Text>
        <Text>{item.EventReleaseDate}</Text>
        <View style={styles.genreArray}>
          {this.renderGenre(item.GenreArray)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create( {
  container: {
    flexDirection: 'column',
    margin: 8,
    flex: 1,
    justifyContent: 'space-around',
  },
  actors: {
    marginRight: 8,

  },
  genreArray: {
    flexDirection: 'row',
  },
  genre: {
    borderColor: '#eeeeee',
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 5,
  },
} );
