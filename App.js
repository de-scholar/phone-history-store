import { createSwitchNavigator ,createAppContainer } from 'react-navigation';
import WelcomeScreen from './src/screens/WelcomeScreen';

const navigator = createSwitchNavigator(
  {
    WelcomeScreen
  }, {
    initialRouteName: 'WelcomeScreen',
    defaultNavigationOptions: {
      title:'Phone History Store'
    }
  }
);

export default createAppContainer(navigator);
