import React from 'react';
import { FlatList } from 'react-native';
import colors from 'res/colors';
import Post from './post/Post';
import StoryContainer from './story/StoryContainer';

const HomeScreen = (props) => {
  const post = {
    username: 'ozaferayan',
    placeName: 'İstanbul, Türkiye',
    imgUrl: 'https://picsum.photos/512',
    likeCount: 103,
    commentCount: 42,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    publishedAt: '2019-11-24T17:28:31.123Z',
  };
  onStoryPress = async () => { props.navigation.navigate('Story') };
  const stories = [
    { "key": "ozaferayan", "isStoryInsertable": true, "hasStory": false, "src": "https://pbs.twimg.com/profile_images/1122720030800711681/O4gJTgiG_400x400.jpg" },
    { "key": "ngordon", "hasStory": true, "src": "https://i.pravatar.cc/150?img=8" },
    { "key": "r_von_rails", "hasStory": true, "src": "https://i.pravatar.cc/150?img=9" },
    { "key": "figNelson", "hasStory": true, "src": "https://i.pravatar.cc/150?img=10" },
    { "key": "benjaminEv", "hasStory": true, "src": "https://i.pravatar.cc/150?img=11" },
    { "key": "gilesPos", "hasStory": true, "src": "https://i.pravatar.cc/150?img=12" },
    { "key": "hugh27", "hasStory": true, "src": "https://i.pravatar.cc/150?img=13" },
    { "key": "b_guidelines", "hasStory": true, "src": "https://i.pravatar.cc/150?img=14" }
  ];
  return (
    <FlatList
      ListHeaderComponent={() => <StoryContainer stories={stories} onStoryPress={this.onStoryPress} />}
      style={{ backgroundColor: colors.background }}
      data={[
        { key: 'a' },
        { key: 'b' },
        { key: 'c' },
        { key: 'd' },
        { key: 'e' },
      ]}
      renderItem={() => <Post post={post} />}
    />
  );
}
export default HomeScreen;