import { StackNavigator } from 'react-navigation'

import AuthorizedNavigation from './AuthorizedNavigation'
import Login from '../screens/unauthorized/Login'
import Chat from '../screens/Chat'

const Root = StackNavigator({
    Unauthorized: {
        screen: Login
    },
    Authorized: {
        screen: AuthorizedNavigation,
        navigationOptions: {
            header: false
        }
    }
}, {
        headerMode: 'screen',
        /*navigationOptions:{
            header:false
        }*/
    })

export default Root
