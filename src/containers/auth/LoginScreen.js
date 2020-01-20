import React from 'react';
import { Button, View } from 'react-native';
import palette from 'res/palette';

const LoginScreen = (props) => {

  _signInAsync = async () => { props.navigation.navigate('Main') };

  return (
    <View style={palette.container.center}>
      <Button title="Giriş yap" onPress={this._signInAsync} />
    </View>
  );
}

export default LoginScreen;