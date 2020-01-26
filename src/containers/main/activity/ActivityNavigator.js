import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import palette from 'res/palette';
import colors from 'res/colors';
import ActivityScreen from './ActivityScreen';

const ActivityNavigator = createStackNavigator({
  Activity: {
    screen: ActivityScreen,
    navigationOptions: () => ({
      ...palette.header,
      headerLeft: () => (
        <View style={styles.headerLeftContainer}>
          <Text style={styles.headerLeftText}>Hareketler</Text>
        </View>
      ),
    })
  }
});

const styles = StyleSheet.create({
  headerLeftContainer: { ...palette.header.headerLeftContainer },
  headerLeftText: { color: colors.text, marginLeft: 10, fontSize: 18 },
});

export default ActivityNavigator;