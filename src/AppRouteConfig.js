import { createStackNavigator } from 'react-navigation';
import { Home, Profile } from './screens';

const AppNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Profile: { screen: Profile },
    }
)

export default AppNavigator;

