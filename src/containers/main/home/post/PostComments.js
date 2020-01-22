import React from 'react';
import { StyleSheet, Text, TouchableOpacity, } from 'react-native';
import colors from 'res/colors';

const PostComments = ({ post }) => {

  return (
  <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
    <Text style={styles.text}>
      {post.likeCount} yorumun tümünü gör
    </Text>
  </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingStart: 20,
    paddingEnd: 20,
  },
  text: {
    color: colors.textFaded2,
  }
});

export default PostComments;