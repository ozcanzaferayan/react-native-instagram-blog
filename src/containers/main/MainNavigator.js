import { createStackNavigator } from 'react-navigation-stack';
import MainScreen from "./MainScreen";
import OtherScreen from './OtherScreen';

const MainNavigator = createStackNavigator({ Main: MainScreen, Other: OtherScreen });
export default MainNavigator;