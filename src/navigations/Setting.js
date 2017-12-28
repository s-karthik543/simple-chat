import React from 'react'
import { Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SettingScreen from '../screens/authorized/setting/Setting'

const Setting = StackNavigator({
    Setting: {
        screen: SettingScreen,
        navigationOptions: {
            drawerLabel: 'Setting',
            drawerIcon: ({ tintColor }) => (
                <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../img/gear.png')} />
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


export default Setting