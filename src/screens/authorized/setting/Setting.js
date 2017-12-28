import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'
import DrawerButton from '../../../components/DrawerButton'

class Setting extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Setting',
        headerLeft: (
            <DrawerButton navigation={navigation} />
        )
    })

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Setting</Text>
            </View >
        )
    }
}

export default Setting