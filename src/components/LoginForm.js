import React, {Component} from 'react';
import {CardSection, Card, Button, Input} from "./common";

class LoginForm extends Component {
    state = {email:'',password:''};
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
                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>



        )
    }
}

const styles = {
  inputFieldStyle : {
      height: 20,
      width:100
  }
};
export default LoginForm