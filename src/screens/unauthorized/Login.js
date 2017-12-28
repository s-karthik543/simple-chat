import React, { Component } from 'react'
import {
    View,
    Text,
    ActivityIndicator,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import firebase from 'firebase';
import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { loginSuccess } from '../../actions/Authenticate'

/*
const config = {
    apiKey: "AIzaSyDvw_9T9qNhfDa76dNahbhPPBSmdNUHkyk",
    authDomain: "chat-1a833.firebaseapp.com",
    databaseURL: "https://chat-1a833.firebaseio.com",
    projectId: "chat-1a833",
    storageBucket: "chat-1a833.appspot.com",
    messagingSenderId: "483706756626"
};
firebase.initializeApp(config);*/
const config = {
    apiKey: "AIzaSyAFomdOCEosRVElNZNHCm9vK96Y9gIhUls",
    authDomain: "simplechat-85e46.firebaseapp.com",
    databaseURL: "https://simplechat-85e46.firebaseio.com",
    projectId: "simplechat-85e46",
    storageBucket: "simplechat-85e46.appspot.com",
    messagingSenderId: "227237817657"
};
firebase.initializeApp(config);



class Login extends Component {

    static navigationOptions = {
        header: false
    }

    state = {
        animating: false,
        error: ""
    }


    onLogin = async () => {
        try {
            this.setState({
                animating: true,
                error: null
            });
            const result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
            if (result.isCancelled) {
                throw new Error('Please sign in before continue');
            }
            const tokenData = await AccessToken.getCurrentAccessToken();
            const token = tokenData.accessToken.toString();
            const credential = firebase.auth.FacebookAuthProvider.credential(token);
            const user = await firebase.auth().signInWithCredential(credential);
            this.setState({
                animating: false,
                error: null
            });

            this.props.loginSuccess(user);
        } catch (error) {
            console.log("error ", error)
            this.setState({
                animating: false,
                error: error.message
            });
        }
    }

    renderError = () => {

    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, color: 'red' }}>Login Screen</Text>

                <ActivityIndicator
                    animating={this.state.animating}
                    color="#444"
                    size="large" />

                {
                    this.state.error ? (
                        <Text style={styles.error}>{this.state.error}</Text>
                    ) : null
                }
                <TouchableOpacity
                    onPress={this.onLogin}
                    style={{ marginTop: 10, padding: 10, backgroundColor: '#3b5998', borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>
                        Login with Facebook
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {
    error: {
        fontSize: 18,
        color: 'red'
    }
}

const mapStateToProps = (state) => {
    // console.log("State ", state)

    return {
        logged: state.authentication.loggedIn,
        user: state.authentication.user
    }
}

export default connect(mapStateToProps, { loginSuccess })(Login)