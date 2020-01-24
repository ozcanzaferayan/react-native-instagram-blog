import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import colors from 'res/colors';
import ProfilePicture from 'components/ProfilePicture';

const StoryListItem = ({item, onStoryPress}) => {
  return <View style={styles.container}>
    <ProfilePicture item={item} onStoryPress={onStoryPress}/>
    <Text style={styles.name}>{item.key}</Text>
  </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 15,
    alignItems: 'center'
  },
  name: {
    color: colors.text,
    fontWeight: 'normal',
    fontSize: 12,
    marginTop: 5
  },
});

export default StoryListItem;