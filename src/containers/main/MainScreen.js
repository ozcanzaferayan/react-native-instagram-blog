import React from 'react';
import { Button, View } from 'react-native';
import palette from 'res/palette';

const MainScreen = (props) => {

  _signOutAsync = async () => props.navigation.navigate('Login');
  _otherScreen = async () => props.navigation.navigate('Other');

  return (
    <View style={palette.container.center}>
      <Button title="Çıkış Yap" onPress={this._signOutAsync} />
      <Button title="Diğer ekran" onPress={this._otherScreen} />
    </View>
  );
}

export default MainScreen;