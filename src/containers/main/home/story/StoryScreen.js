import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
const StoryScreen = (props) => {

  return (
    <View style={styles.container}>
      <Image source={{ uri: "https://picsum.photos/512" }} style={styles.storyImg} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  storyImg: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default StoryScreen;