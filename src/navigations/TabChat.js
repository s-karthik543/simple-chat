import React from 'react'
import { Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import AddChat from '../screens/authorized/home/chat/AddChat'
import EditChat from '../screens/authorized/home/chat/EditChat'
import ListChat from '../screens/authorized/home/chat/ListChat'
import ViewChat from '../screens/authorized/home/chat/ViewChat'


const TabChat = StackNavigator({
    List: {
        screen: ListChat,
        navigationOptions: {
            tabBarLabel: 'Chat',
            tabBarIcon: ({ tintColor }) => (
                <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../img/chat.png')} />
            )
        }
    },
    Add: { screen: AddChat },
    Edit: { screen: EditChat },
    View: { screen: ViewChat }
})


const styles = {
    icon: {
        width: 32,
        height: 32
    }
}

export default TabChat