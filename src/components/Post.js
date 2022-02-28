import React, { Component } from 'react';
import { Alert, TextInput, ImageBackground, Image, View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const IMAGES = {
    home: require('../../assets/home.png'),
}
export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headline: '',
            hostname: '',
            hostage: '',
            mambers: '',
            agelimit: '',
            gender: '',
            location: '',
            date: '',
            time: '',
        };
    }

    onLogin() {
        const { headline } = this.state;
        const { hostname } = this.state;
        const { hostage } = this.state;
        const { mambers } = this.state;
        const { agelimit } = this.state;
        const { gender } = this.state;
        const { location } = this.state;
        const { date } = this.state;
        const { time } = this.state;

        Alert.alert('Credentials', `${headline} ${hostname} ${hostage} ${mambers} ${agelimit} ${gender} ${location} ${date} ${time}`);
    }


    render() {
        return (
            <View style={styles.container}>
                <View>
                        <Image
                            style={styles.headerimg}
                            source={IMAGES.home}
                        />
                </View>
                <TextInput
                    value={this.state.username}
                    onChangeText={(headline) => this.setState({ headline })}
                    multiline={true}
                    placeholder={'Headline'}
                    placeholderTextColor='white'
                    style={styles.inputtop}
                />

                <TextInput
                    value={this.state.about}
                    multiline={true}
                    onChangeText={(hostname) => this.setState({hostname })}
                placeholder={'Host name'}
                    placeholderTextColor='white'
                    style={styles.input1}
                />
                <TextInput
                    value={this.state.username}
                    onChangeText={(hostage) => this.setState({ hostage })}
                    multiline={true}
                    placeholder={'Host age'}
                    placeholderTextColor='white'
                    style={styles.input}
                />

                <TextInput
                    value={this.state.about}
                    multiline={true}
                    onChangeText={(mambers) => this.setState({ mambers })}
                    placeholder={'Number of people'}
                    placeholderTextColor='white'
                    style={styles.input1}
                />
                <TextInput
                    value={this.state.username}
                    onChangeText={(agelimit) => this.setState({ agelimit })}
                    multiline={true}
                    placeholder={'Age limit'}
                    placeholderTextColor='white'
                    style={styles.input}
                />

                <TextInput
                    value={this.state.about}
                    multiline={true}
                    onChangeText={(gender) => this.setState({ gender })}
                    placeholder={'Gender'}
                    placeholderTextColor='white'
                    style={styles.input1}
                />
                <TextInput
                    value={this.state.username}
                    onChangeText={(location) => this.setState({ location })}
                    multiline={true}
                    placeholder={'Location'}
                    placeholderTextColor='white'
                    style={styles.input}
                />

                <TextInput
                    value={this.state.about}
                    multiline={true}
                    onChangeText={(date) => this.setState({ date })}
                    placeholder={'Date'}
                    placeholderTextColor='white'
                    style={styles.input1}
                />
                <TextInput
                    value={this.state.username}
                    onChangeText={(time) => this.setState({ time })}
                    multiline={true}
                    placeholder={'Time'}
                    placeholderTextColor='white'
                    style={styles.input}
                />

                <TouchableOpacity
                    onPress={this.onLogin.bind(this)}
                    style={{ backgroundColor: 'yellow', width: '16%', height: 20, borderRadius: 2, marginLeft: '80%' }}>
                    <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', textAlign: 'center' }}>Host</Text>
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
        marginTop: 30,
        alignItems: 'center',
        backgroundColor: 'black',
    },
    headerimg: {
        width: 40,
        height: 40,
        marginBottom: 10,
    },
    inputtop: {
        width: '112%',
        height: 50,
        padding: 15,
        borderTopColor: '#FFFFFF',
        borderWidth: 1,
        fontSize: 20,
        color: 'yellow',
        borderRadius: 5,
    },
    input: {
        width: '112%',
        height: 50,
        padding: 15,
        borderWidth: 5,
        fontSize: 20,
        color: 'yellow',
        borderRadius: 5,
    },
    input1: {
        width: '112%',
        height: 55,
        padding: 15,
        borderWidth: 2,
        fontSize: 20,
        color: 'yellow',
        borderTopColor: '#FFFFFF',
        borderBottomColor: '#FFFFFF',
        borderRadius: 5,
        textAlignVertical: "top"
    },
    // inputbottom: {
    //     width: '112%',
    //     height: 50,
    //     padding: 15,
    //     borderBottomColor: '#FFFFFF',
    //     borderWidth: 5,
    //     fontSize: 20,
    //     color: 'yellow',
    //     borderRadius: 5,
    // },
    text: {
        fontSize: 30,
        color: 'yellow',
        fontWeight: 'bold',
        alignItems: 'center',
        marginBottom: 10
    },
});