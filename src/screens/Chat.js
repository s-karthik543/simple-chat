import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    ListView,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { logout } from '../actions/Authenticate'

class Chat extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'Chat',
        headerLeft: (
            <TouchableWithoutFeedback onPress={() => navigation.state.params.onLogoutPressed()} >
                <Text>Logout</Text>
            </TouchableWithoutFeedback>
        ),
    })

    onLogoutPressed = () => {
        this.props.logout()
    }

    state = {
        friends: [
            {
                name: "Karthik",
                age: 25,
                avatar: "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
            },
            {
                name: "Karthik 2",
                age: 25,
                avatar: "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
            },
            {
                name: "Karthik 3",
                age: 25,
                avatar: "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
            },
            {
                name: "Karthik 4",
                age: 25,
                avatar: "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
            },
            {
                name: "Karthik 5",
                age: 25,
                avatar: "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
            },
            {
                name: "Karthik 6",
                age: 25,
                avatar: "http://enadcity.org/enadcity/wp-content/uploads/2017/02/profile-pictures.png"
            }
        ]
    }

    componentDidMount() {
        this.props.navigation.setParams({
            onLogoutPressed: this.onLogoutPressed
        })
    }


    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        this.dataSource = ds.cloneWithRows(this.state.friends)
    }

    render() {

        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                    renderSeparator={this.renderSeparator}
                />
            </View>
        )
    }

    renderRow = (item) => {

        return (
            <View style={styles.itemContainer}>
                <Image style={styles.avatar} source={{ uri: item.avatar }} />
                <Text style={styles.itemName}>
                    {item.name}
                </Text>
            </View>
        )
    }

    renderSeparator = (sectionID, rowID) => {
        return <View style={styles.separator} key={`${sectionID}-${rowID}`} />
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 60
    },
    avatar: {
        width: 60,
        height: 60
    },
    separator: {
        borderBottomWidth: 1,
        borderBottomColor: '#444'
    },
    itemName: {
        paddingLeft: 15,
        fontSize: 16,
        color: '#333'
    }
})

export default connect(null, { logout })(Chat)