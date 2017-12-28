import React from 'react'
import { Image } from 'react-native'
import { TabNavigator,TabBarBottom } from 'react-navigation'
import TabContact from './TabContact'
import TabChat from './TabChat'
import TabGroup from './TabGroup'


const Home = TabNavigator({
    TabContact: {
        screen: TabContact
    },
    TabChat: {
        screen: TabChat
    },
    TabGroup: {
        screen: TabGroup
    }
}, {
        headerMode: 'screen',
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            indicatorStyle: null,
            activeTintColor: 'blue',
            inactiveTintColor: 'grey'

        },
        tabBarComponent:TabBarBottom,
        navigationOptions: {
            drawerLabel: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../img/home.png')} />
            )
        }

    })

const styles = {
    icon: {
        width: 24,
        height: 24
    }
}
export default Home
