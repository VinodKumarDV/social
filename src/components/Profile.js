import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity,  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ProfileList from './ProfileList';

export default class Profile extends Component {

    

    render() {
        return (
            <View style={styles.main}>
                <View>
                    <Image
                        style={styles.backgroundimg}
                        source={{
                            uri: 'https://th.bing.com/th/id/R.2b07d18b76ffea3d3dcee98072caf790?rik=7Bcd%2ff9Ihs8i1Q&riu=http%3a%2f%2fb.rgbimg.com%2fcache1y59mK%2fusers%2fn%2fnh%2fnh313066%2f600%2foZJ542G.jpg&ehk=PprUaaFH6uwTxle1wccpX7Sk6V4PpNvWMSBYRvHw%2fbE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
                        }}
                    />
                </View>
                <View style={styles.container}>
                    <Text style={styles.text}>Cahaya Dewi</Text>
                    <Text style={styles.text1}>Hello. welcome to my Profile</Text>
                    <Text style={styles.text2}>74 connections</Text>
                
                    <View style={{ padding: 7, alignItems: 'flex-end', marginTop: -180 }}>
                        <LinearGradient
                            colors={['#bc2a8d', '#e95950', '#fccc63']}
                            style={{ padding: 2, borderRadius: 50 }}>
                            <Image source={{ uri: "https://media.gqindia.com/wp-content/uploads/2018/05/26-866x956.jpg" }} style={styles.userImage} />
                        </LinearGradient>
                        <View style={{ position: 'absolute' }}>
                            <Text style={styles.userName}>@Cahayadewi</Text>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <TouchableOpacity
                            // onPress={}
                            style={{ backgroundColor: '#FFFD6F', width: '46%', height: 40, marginTop: 50, borderRadius: 2, marginBottom: 5}}>
                            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', borderColor: '#00000000', marginTop: '5%' }}>Connect</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            // onPress={}
                            style={{ backgroundColor: '#FFFD6F', width: '46%', height: 40, marginTop: 50, borderRadius: 2, marginBottom: 5 }}>
                            <Text style={{ fontSize: 15, color: 'black', textAlign: 'center', borderColor: '#00000000', marginTop: '5%' }}>Invite</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <Posts/> */}
                    <ProfileList />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 0,
        width: '100%',
        height: '100%',
        padding: 15,
        backgroundColor: 'black',
    }, 

    backgroundimg: {
        width: '100%',
        marginTop: 30,
        height: 100,
    },

    text: {
        fontSize: 20,
        marginBottom: 10,
        color: 'white'
    },

    text1: {
        fontSize: 15,
        marginBottom: 10,
        color: 'white'
    },

    text2: {
        fontSize: 20,
        marginBottom: 50,
        color: 'white'
    },

    userName: {
        fontSize: 15,
        padding: 10,
        marginTop: 105,
        color: 'white'
    },

    userImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        borderColor: "#ffffff",
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30,
    }
});