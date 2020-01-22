import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import colors from 'res/colors';

const PostLikes = ({ post }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
      <Text style={styles.text}>{post.likeCount} beğenme
      </Text>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingStart: 20, 
    paddingEnd: 20, 
  },
  text: {
    color: colors.text,
    fontWeight: 'bold'
  },
});

export default PostLikes;