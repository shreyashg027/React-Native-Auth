import React, {Component} from 'react';
import firebase from 'firebase';
import {Text } from 'react-native';
import {CardSection, Card, Button, Input, Spinner} from "./common";

class LoginForm extends Component {
    state = {email:'',password:'',error:'', loading:false};

    onPressButton(){
        const {email, password } = this.state;
        this.setState({error:'', loading:true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this))
            })
    }
    onLoginFail(){
        this.setState({
            error:'Authentication Failed.',loading:false
        })
    }
    onLoginSuccess(){
        this.setState({
            email:'',
            password:'',
            error:'',
            loading:false
        })
    }
    RenderButton(){
        if(this.state.loading){
            return <Spinner/>
        }
        return(
            <Button
                onPress={this.onPressButton.bind(this)}
            >
                Log in
            </Button>
        )
    }
    render(){
        return(
            <Card>
            <CardSection>
                <Input
                    placeholder= "user@gmail.com"
                    label = 'Email'
                    value = {this.state.email}
                    onChangeText = {text => this.setState({email: text})}
                />
            </CardSection>
            <CardSection>
                <Input
                    // placeholder= "user@gmail.com"
                    secureTextEntry
                    label = 'Password'
                    value = {this.state.password}
                    onChangeText = {password => this.setState({password})}
                />
            </CardSection>
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    {this.RenderButton()}
                </CardSection>
            </Card>



        )
    }
}

const styles = {
  inputFieldStyle : {
      height: 20,
      width:100
  },
    errorTextStyle: {
      fontSize:18,
        alignSelf: 'center',
        color: 'red'
    }
};
export default LoginForm