import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import colors from 'res/colors';
import images from 'res/images';
import prettyTime from 'utils/prettyTime';
import ProfilePicture from 'components/ProfilePicture';

const MessageListItem = (props) => {
  const prettyTimeTemplates = {
    short: {
      prefix: "",
      suffix: "",
      seconds: "şimdi",
      minute: "1d",
      minutes: "%dd",
      hour: "1s",
      hours: "%ds",
      day: "1g",
      days: "%dg",
      month: "1a",
      months: "%da",
      year: "1y",
      years: "%dy"
    }
  };
  return (
    <TouchableOpacity style={styles.container} onPress={() => console.log("test")}>
      <ProfilePicture item={props.item} />
      <View style={styles.textContainer}>
        <Text style={stylesParams(props.item).username}>{props.item.key}</Text>
        <View style={styles.messageContainer} >
          <Text style={stylesParams(props.item).message} numberOfLines={1}>
            {props.item.isRead ? props.item.lastMsg : "Bir mesaj gönderdi"}
          </Text>
          <Text style={stylesParams(props.item).message}> · </Text>
          <Text style={stylesParams(props.item).message}>{prettyTime(prettyTimeTemplates.short, props.item.sendTime)}</Text>
        </View>
      </View>
      {!props.item.isRead && <View style={styles.unreadIndicator} />}
      <TouchableOpacity>
        <Image source={props.item.isRead ? images.photo_camera_gray : images.photo_camera} style={styles.cameraImage} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    marginStart: 20
  },
  messageContainer: {
    flexDirection: 'row',
    marginRight: 50,
    marginTop: 5
  },
  unreadIndicator: {
    backgroundColor: colors.storyAdd,
    width: 7,
    height: 7,
    borderRadius: 7,
    marginRight: 10
  },
  cameraImage: {
    width: 25,
    height: 25
  },
});

const stylesParams = (params) => StyleSheet.create({
  username: {
    color: colors.text,
    fontWeight: params.isRead ? 'normal' : 'bold'
  },
  message: {
    color: params.isRead ? colors.textFaded1 : colors.text,
    fontWeight: params.isRead ? 'normal' : 'bold',
  },
});

export default MessageListItem;