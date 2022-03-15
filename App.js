import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen";
import Home from "./src/screens/Home";


const navigator = createStackNavigator(
    {
        Search: SearchScreen,
        Home: Home,

    }, {
        initialRouteName: 'Search',
        defaultNavigationOptions: {
            title: 'app'
        }
    }
);

export default createAppContainer(navigator);

