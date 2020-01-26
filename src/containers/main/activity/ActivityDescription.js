import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import colors from 'res/colors';

const ActivityDescription = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.name}>{props.item.key}</Text>
        {
          props.item.activityType === 'like'
            ? ' yorumunu beğendi: '
            : ' bir yorumda senden bahsetti: '
        }
        {props.item.lastMsg}
        <Text style={styles.date}> · {props.item.sendTime}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, marginStart: 20, marginEnd: 20, },
  text: { color: colors.textFaded1, fontWeight: 'normal' },
  name: { fontWeight: 'bold' },
  date: { color: colors.textFaded2, },
});

export default ActivityDescription;