import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    Button,
    ListView,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native'
import { connect } from 'react-redux'
import { fectchListContact } from '../../../../actions'
import DrawerButton from '../../../../components/DrawerButton'

class ListContact extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'List Contact',
        headerLeft: (
            <DrawerButton navigation={navigation} />
        ),
        tabBarLabel: 'Contacts',
        tabBarIcon: ({ tintColor }) => (
            <Image style={[styles.icon, { tintColor: tintColor }]} source={require('../../../../img/contact.png')} />
        ),
    })

    componentWillMount() {
        this.props.fectchListContact(this.props)
        this.createDataSource(this.props);
    }

    createDataSource({ contacts }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(contacts);
    }


    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    onRowPressed = (friend) => {
        this.props.navigation.navigate('Conversation', { friend });
    }

    renderRow = (item) => {
        console.log("Item ", item)
        return (
            <TouchableOpacity
                onPress={this.onRowPressed.bind(this, item)}
                style={styles.row} >
                <Image source={{ uri: item.photoURL }} style={styles.avatar} />
                <Text style={styles.name} >{item.displayName}</Text>
            </TouchableOpacity>
        );
    }


    render() {
        if (this.props.loading) {
            return (
                <View style={styles.containerIndicator}>
                    <ActivityIndicator size="large" color="grey" animating />
                </View>
            );
        }

        return (
            <View style={styles.container}>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = {
    icon: {
        width: 32,
        height: 32
    },
    container: {
        flex: 1
    },
    containerIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#000'
    },
    avatar: {
        width: 100,
        height: 100,
        borderWidth: 1
    },
    name: {
        fontSize: 18,
        paddingLeft: 15,
        color: '#000'
    }
};

export default connect(state => ({
    contacts: state.contact.contacts,
    loading: state.contact.loading,
    me:state.authentication.user
}), { fectchListContact })(ListContact)