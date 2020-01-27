import React from 'react';
import { AppRegistry } from 'react-native';
import { StatusBar } from 'react-native';
import { name as appName } from './app.json';
import AppNavigator from 'containers/AppNavigator';
import { createAppContainer } from 'react-navigation';
import { store } from 'store';
import { Provider } from 'react-redux';

StatusBar.setBarStyle('light-content', true);
StatusBar.backgroundColor = '#000';

const Navigation = createAppContainer(AppNavigator);
const Root = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);
AppRegistry.registerComponent(appName, () => Root);