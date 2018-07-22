import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'
class App extends Component{
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyAfgrGE3jlj9gjVx8mhuD0v-oAqVP88jg0",
            authDomain: "auth-bc1df.firebaseapp.com",
            databaseURL: "https://auth-bc1df.firebaseio.com",
            projectId: "auth-bc1df",
            storageBucket: "auth-bc1df.appspot.com",
            messagingSenderId: "690964662201"
        });
    }
    render(){
        return(
            <View>
                <Header name='Authentication'/>
                <LoginForm/>
            </View>
        )
    }
}

export default App