import React from 'react';
import { TextInput, Text, View} from 'react-native';

const Input = ({label, onChangeText, value, placeholder, secureTextEntry}) => {
    const {viewStyle, labelStyle, inputStyle} = styles;
    return(
        <View style={viewStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText = {onChangeText}
                style={inputStyle}
                autoCorrect = {false}
            />
        </View>
    )
};

const styles = {
    viewStyle : {
        height:40,
        flex: 1,
        flexDirection:'row',
        alignItems : 'center'
    },
    labelStyle:{
        flex: 1 ,
        fontSize:18,
        paddingLeft:20
    },
    inputStyle:{
        flex:2,
        color:'#000',
        paddingRight:5,
        paddingLeft: 5,
        lineHeight: 23,
        fontSize: 18,
        height: 20,
        width:50

    }
};

export {Input}