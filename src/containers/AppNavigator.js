import { createSwitchNavigator } from 'react-navigation';
import MainNavigator from './main/MainNavigator';
import LoginScreen from './auth/LoginScreen';
import TabNavigator from './main/TabNavigator';

const routeConfig = { Login: LoginScreen, Main: TabNavigator };
const navigatorConfig = { initialRouteName: 'Login' };

export default AppNavigator = createSwitchNavigator(routeConfig, navigatorConfig);