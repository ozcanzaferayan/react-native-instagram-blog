import React from 'react';
import { StyleSheet, Text, } from 'react-native';
import colors from 'res/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import prettyTime from 'utils/prettyTime';

const PostPublishDate = ({ post }) => {

  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log('test')}>
      <Text style={styles.text}>
        {prettyTime(post.publishedAt)}
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
    fontSize: 12,
  }
});

export default PostPublishDate;