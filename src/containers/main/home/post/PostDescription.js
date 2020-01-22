import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import colors from 'res/colors';
import ReadMore from 'react-native-read-more-text';

const PostDescription = ({ post }) => {

  renderTruncatedFooter = (handlePress) => {
    return (
      <Text style={styles.readMoreText} onPress={handlePress}>
        ...devamını oku
      </Text>
    );
  }

  renderRevealedFooter = () => {
    return;
  }

  return (
    <View style={styles.container}>
      <ReadMore
        numberOfLines={2}
        renderTruncatedFooter={this.renderTruncatedFooter}
        renderRevealedFooter={this.renderRevealedFooter}>
        <Text style={styles.username}>
          {post.username}
        </Text>
        <Text style={styles.text}>
          {' ' + post.text}
        </Text>
      </ReadMore>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    paddingStart: 20,
    paddingEnd: 20,
  },
  username: {
    color: colors.text,
    fontWeight: 'bold',
  },
  text: {
    color: colors.text,
  },
  readMoreText: {
    color: colors.textFaded2,
    marginTop: 5
  },
});

export default PostDescription;