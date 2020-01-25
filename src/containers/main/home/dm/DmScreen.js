import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, } from 'react-native';
import images from 'res/images';
import colors from 'res/colors';
import palette from 'res/palette';
const DmScreen = (props) => {

  return (
    <View style={styles.container}></View>
  );
}
DmScreen.navigationOptions = ({ navigation }) => ({
  ...palette.header,
  headerLeft: () => (
    <View style={styles.headerLeftContainer}>
      <TouchableOpacity style={styles.headerLeftBackButton} onPress={() => navigation.goBack(null)}>
        <Image style={styles.headerLeftBackButtonImage} source={images.back} />
        <Text style={styles.headerLeftBackButtonText}>Dm</Text>
      </TouchableOpacity>
    </View>
  ),
  headerRight: () => (
    <View style={styles.headerRightContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={styles.headerRightCamera} source={images.video_camera} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Info')}>
        <Image style={styles.headerRightDm} source={images.write} />
      </TouchableOpacity>
    </View>
  ),
});

const styles = StyleSheet.create({
  container: { backgroundColor: colors.background, padding: 20, flex: 1 },
  header: { color: colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 20 },
  headerLeftContainer: { marginLeft: 20, flex: 1, flexDirection: 'row', alignItems: 'center' },
  headerLeftBackButton: { flexDirection: 'row' },
  headerLeftBackButtonImage: { height: 25, width: 25 },
  headerLeftBackButtonText: { color: colors.text, marginLeft: 20, fontSize: 18 },
  headerRightContainer: { marginRight: 20, flex: 1, flexDirection: 'row', alignItems: 'flex-start' },
  headerRightCamera: { width: 25, height: 25, resizeMode: 'contain' },
  headerRightDm: { marginLeft: 20, paddingTop: 10, height: 23, width: 23, resizeMode: 'contain' },
});

export default DmScreen;