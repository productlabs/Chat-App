import React from 'react';

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Button,
    StyleSheet
} from 'react-native';

import { Actions } from 'react-native-router-flux';


export default class Home extends React.Component{
    state = {
        name: ''
    };
    render(){
        return (
            <View>
                <Text style={styles.title}>
                    Enter your name:
                </Text>
                <TextInput 
                placeholder='John Doe'
                onChangeText = {(text) => this.setState({name: text})}
                style={styles.textInput}
                />
                <TouchableOpacity 
                    style={styles.buttonWrapper}>
                    <Button 
                    title='Next'
                    onPress = {() => {
                        alert(this.state.name)
                        Actions.chat({
                        username: this.state.name
                    })
                    }
                    }
                    accessibilityLabel = 'AccessibilityLabel'
                    />   
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        marginTop: 20,
        marginLeft: 20,
        fontFamily: 'Roboto'
    },
    textInput: {
        height: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: '#000',
        margin: 20,
        backgroundColor: '#fff'
    },
    buttonWrapper: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: '80%'
    }
});