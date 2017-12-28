import React from 'react'
import PropTypes from 'prop-types'
import {
    TouchableOpacity,
    Image
} from 'react-native'


const DrawerButton = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate('DrawerOpen')}>
            <Image source={require('../img/menu.png')} style={{ width: 32, height: 32 }} />
        </TouchableOpacity>
    )
}

DrawerButton.propTypes = {
    navigation: PropTypes.object
}

export default DrawerButton