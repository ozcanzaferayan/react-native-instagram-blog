import React from 'react';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colors from 'res/colors';
import images from 'res/images';

const SearchBar = () => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
      <Image source={images.search} style={styles.image} />
      <Text style={styles.text}>Ara</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.textFaded3,
    padding: 8,
    borderRadius: 5,
  },
  image: {
    width: 15,
    height: 15,
  },
  text: {
    color: colors.textFaded2,
    marginStart: 10,
  }
});

export default SearchBar;