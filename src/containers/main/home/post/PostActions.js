import React from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import images from 'res/images';
import { TouchableOpacity } from 'react-native-gesture-handler';

const PostActions = () => {

  return <View style={styles.container}>
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={images.like} style={{ ...styles.icon, marginLeft: 0 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={images.comment} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('test')}>
        <Image source={images.dm} style={styles.icon} />
      </TouchableOpacity>
    </View>
    <TouchableOpacity onPress={() => console.log('test')}>
      <Image source={images.bookmark} style={styles.icon} />
    </TouchableOpacity>
  </View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingStart: 20, 
    paddingEnd: 20, 
    paddingTop: 15, 
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15
  },

});

export default PostActions;