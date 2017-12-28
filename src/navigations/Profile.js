import React from 'react'
import { Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import ProfileScreen from '../screens/authorized/profile/Profile'

const Profile = StackNavigator({
    Profile: {
        screen: ProfileScreen,
        navigationOptions: {
            drawerLabel: 'Profile',
            drawerIcon: ({ tintColor }) => (
                <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../img/contact.png')} />
            )
        }
    }
})


const styles = {
    icon: {
        width: 32,
        height: 32
    }
}

export default Profile