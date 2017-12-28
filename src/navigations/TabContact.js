import React from 'react'
import { Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
// import AddContact from '../screens/authorized/home/contact/AddContact'
import Conversation from '../screens/authorized/home/contact/Conversation'
import ListContact from '../screens/authorized/home/contact/ListContact'
// import ViewContact from '../screens/authorized/home/contact/ViewContact'


const TabContact = StackNavigator({
    List: { screen: ListContact },
    // Add: { screen: AddContact },
    Conversation: { screen: Conversation },
    // View: { screen: ViewContact }
})

const styles = {
    icon: {
        width: 32,
        height: 32
    }
}

export default TabContact