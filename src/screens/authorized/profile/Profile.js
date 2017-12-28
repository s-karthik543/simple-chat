import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import DrawerButton from '../../../components/DrawerButton'

class Profile extends Component {

     static navigationOptions = ({ navigation }) => ({
        title: 'Profile',
        headerLeft: (
            <DrawerButton navigation={navigation} />
        )
    })

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Profile</Text>
            </View >
        )
    }
}

export default Profile