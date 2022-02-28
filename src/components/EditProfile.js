import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            about: '',
        };
    }

    onLogin() {
        const { username } = this.state;
        const { about } = this.state;

        Alert.alert('Credentials', `${username} ${about}`);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Edit profile</Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'User Name'}
                    placeholderTextColor='white'
                    style={styles.input}
                />
                
                <TextInput
                    value={this.state.about}
                    multiline= {true}
                    onChangeText={(about) => this.setState({ about })}
                    placeholder={'About You'}
                    placeholderTextColor='white'
                    style={styles.input1}
                />

                <TouchableOpacity
                    onPress={this.onLogin.bind(this)}
                    style={{ backgroundColor: '#FFFD6F', width: '96%', height: 50, marginTop: 20, borderRadius: 2 }}>
                    <Text style={{ fontSize: 30, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Continue</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 15,
        marginTop: 25,
        alignItems: 'center',
        backgroundColor: 'black',
    },

    input: {
        width: '112%',
        height: 50,
        padding: 15,
        borderWidth: 2,
        fontSize: 20,
        color: 'white',
        borderTopColor: 'white',
        borderRadius: 5,
    },
    input1: {
        width: '112%',
        minHeight: 150,
        padding: 15,
        borderWidth: 2,
        fontSize: 20,
        color: '#FFFD6F',
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        borderRadius: 5,
        textAlignVertical: "top"
    },
    text: {
        fontSize: 30,
        color: '#FFFD6F',
        alignItems: 'center',
        marginBottom: 10
    },
});