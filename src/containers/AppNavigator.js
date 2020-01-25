import { createSwitchNavigator } from 'react-navigation';
import MainNavigator from './main/MainNavigator';
import LoginScreen from './auth/LoginScreen';

const routeConfig = { Login: LoginScreen, Main: MainNavigator };
const navigatorConfig = { initialRouteName: 'Login' };

export default AppNavigator = createSwitchNavigator(routeConfig, navigatorConfig);