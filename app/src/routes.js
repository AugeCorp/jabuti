import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Initial from './pages/Initial';
import Cadastrar from './pages/Cadastrar';
import Main from './pages/Main'

const Routes = createAppContainer(
    createStackNavigator({
        // Initial: {
        //     screen: Initial,
        //     navigationOptions: {
        //         headerShown: false,
        //     }
        // },
        // Cadastrar: {
        //     screen: Cadastrar,
        //     navigationOptions: {
        //         headerShown: false,
        //     }
        // },
        Main: {
            screen: Main,
            navigationOptions: {
                headerShown: false,
            }
        }
    })
);

export default Routes;