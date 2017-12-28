import React from 'react'
import { Image } from 'react-native'
import { StackNavigator } from 'react-navigation'
import AddGroup from '../screens/authorized/home/group/AddGroup'
import EditGroup from '../screens/authorized/home/group/EditGroup'
import ListGroup from '../screens/authorized/home/group/ListGroup'
import ViewGroup from '../screens/authorized/home/group/ViewGroup'


const TabGroup = StackNavigator({
    List: {
        screen: ListGroup,
        navigationOptions: {
            tabBarLabel: 'Group',
            tabBarIcon: ({ tintColor }) => (
                <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../img/group.png')} />
            )
        }
    },
    Add: { screen: AddGroup },
    Edit: { screen: EditGroup },
    View: { screen: ViewGroup }
})

const styles = {
    icon: {
        width: 32,
        height: 32
    }
}

export default TabGroup