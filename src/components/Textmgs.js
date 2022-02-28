import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, ImageBackground, Image, TextInput, Dimensions } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function Textmgs() {
    const [items, setItems] = React.useState([
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
        {},
    ]);

    const IMAGES = {
        social: require('../../assets/mgslog.png'),
        outmgsbg: require('../../assets/outmgs.png'),
        inmgsbg: require('../../assets/inmgs.png'),
    }

    const [userName, setUserName] = useState('');

    const win = Dimensions.get('window')

    return (
        <View style={{ backgroundColor: 'black', marginTop: 30, height: '100%', width: '100%' }}>
            <View style={styles.itemContainer}>
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={IMAGES.social}
                    />
                </View>
                <Text style={styles.itemName}>Cahaya Dewi</Text>
                {/* <Image
                    style={styles.star}
                    source={IMAGES.star}
                /> */}
            </View>
            <FlatGrid
                itemDimension={230}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <View style={{ width: '100%' }}>
                        <View style={{marginBottom: 5, width: win.width/1.5}}>
                            <ImageBackground source={IMAGES.outmgsbg} resizeMode='cover' style={styles.outmgsContainer}>
                            
                            </ImageBackground>
                        </View>
                        <View style={{ marginBottom: 5, width: win.width / 1.5, marginLeft: '30%'  }}>
                            <ImageBackground source={IMAGES.inmgsbg} resizeMode='cover' style={styles.inmgsContainer}>
                            
                            </ImageBackground>
                        </View>
                    </View>
                )}
            />
            <View style={{ alignItems: 'center', position: 'relative' }}>
                <Text style={{ color: 'white', marginTop: '-35%', marginBottom: 5 }}>{userName}</Text>
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={'Enter Here'}
                    multiline={true}
                    style={styles.input}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        flex: 1,
        marginTop: -5,
        marginLeft: '-1%'
    },
    headerimg: {
        width: 50,
        height: 53,
    },
    logo: {
        width: 30,
        height: 35,
        margin: 10,
        position: 'relative'
    },
    inmgsContainer: {
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        height: 80,
        // width: win.width/2
    },
    outmgsContainer: {
        justifyContent: 'center',
        padding: 10,
        marginBottom: 10,
        height: 80,
        // width: win.width/2,
        transform: [
            {scaleX: -1}
        ]
    },
    itemContainer: {
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    logoContainer: {
        width: 50,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemName: {
        fontSize: 16,
        color: 'white',
        fontWeight: '600',
        marginLeft: 10,
        marginTop: '5%'
    },
    star: {
        width: 20,
        height: 20,
        marginTop: '5%',
        marginLeft: '50%'
    },
    input: {
        width: '90%',
        height: 50,
        padding: 10,
        position: 'relative',
        backgroundColor: '#e8e8e8'
    },
});