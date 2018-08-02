import React, {Component} from 'react';
import {Text, View} from 'react-native';
import firebase from 'firebase'
import {Button, CardSection, Header, Spinner} from './components/common'
import LoginForm from './components/LoginForm'
class App extends Component{
    state = {loggedIn: null};
    componentWillMount(){
        firebase.initializeApp({
            apiKey: "AIzaSyAfgrGE3jlj9gjVx8mhuD0v-oAqVP88jg0",
            authDomain: "auth-bc1df.firebaseapp.com",
            databaseURL: "https://auth-bc1df.firebaseio.com",
            projectId: "auth-bc1df",
            storageBucket: "auth-bc1df.appspot.com",
            messagingSenderId: "690964662201"
        });
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false})
            }
        });
    }
    renderContent(){
        switch (this.state.loggedIn){
            case true:
                return (
                    <CardSection>
                        <Button onPress={()=> firebase.auth().signOut()}>Log Out</Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return <Spinner size="large"/>
        }

    }
    render(){
        return(
            <View>
                <Header name='Authentication'/>
                {this.renderContent()}
            </View>
        )
    }
}

export default App