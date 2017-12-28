import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

class AddContact extends Component {

    static navigationOptions = {
        tabBarVisible: false
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Add Contact</Text>
            </View >
        )
    }
}

export default AddContact