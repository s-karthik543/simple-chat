import React, { Component } from 'react'
import {
    View,
    Text,
    Image
} from 'react-native'

class ViewGroup extends Component {

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>View Group</Text>
            </View >
        )
    }
}

export default ViewGroup