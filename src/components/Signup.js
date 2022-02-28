import React, { Component } from 'react';
import { Alert, TextInput, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Login from './Login'

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            useremail: '',
            firstname: '',
            lastname: '',
            password: '',
        };
    }

    onLogin() {
        const { firstname, lastname , password, useremail } = this.state;

        Alert.alert('Credentials', `${firstname + lastname} + ${password} + ${useremail}` );
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Create new</Text>
                <Text style={styles.text1}>Account</Text>
                <Text style={styles.text2}>Already Registered? Log in here</Text>
                <Text style={styles.textinput}>First Name</Text>
                <TextInput
                    value={this.state.firstname}
                    onChangeText={(firstname) => this.setState({ firstname })}
                    // placeholder={'firstname'}
                    placeholderTextColor='#FFFD6F'
                    style={styles.input}
                />
                <Text style={styles.textinput}>Last Name</Text>
                <TextInput
                    value={this.state.lastname}
                    onChangeText={(lastname) => this.setState({ lastname })}
                    // placeholder={'lastname'}
                    placeholderTextColor='#FFFD6F'
                    style={styles.input}
                />
                <Text style={styles.textinput}>Email           </Text>
                <TextInput
                    value={this.state.email}
                    onChangeText={(useremail) => this.setState({ useremail })}
                    // placeholder={'Email'}
                    placeholderTextColor='#FFFD6F'
                    style={styles.input}
                />
                <Text style={styles.textinput}>Password</Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    // placeholder={'Password'}
                    placeholderTextColor='#FFFD6F'
                    secureTextEntry={true}
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={this.onLogin.bind(this)}
                    style={{ backgroundColor: '#FFFD6F', width: '96%', height: 50, marginTop: 10, borderRadius: 2 }}>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: '2%' }}>sing up</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        width: '100%',
        height: '100%',
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    input: {
        width: '97%',
        height: 70,
        padding: 15,
        borderWidth: 1,
        fontSize: 20,
        color: '#FFFD6F',
        borderColor: '#FFFD6F',
        marginBottom: 5,
        borderRadius: 5,
    },
    textinput: {
        fontSize: 15,
        color: '#FFFD6F',
        marginLeft: '-70%',
        textTransform: 'uppercase',
        padding: 5
    },
    text: {
        fontSize: 40,
        color: '#FFFD6F',
        fontWeight: 'bold',
        marginTop: '20%',
        marginBottom: -12
    },
    text1: {
        fontSize: 40,
        color: '#FFFD6F',
        fontWeight: 'bold',
        marginBottom: 15,
    },

    text2: {
        fontSize: 15,
        color: '#FFFD6F',
        marginBottom: 50,
    },
});