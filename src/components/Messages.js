import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function Messages() {
    const [items, setItems] = React.useState([
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
        {  },
    ]);

    const IMAGES = {
        star: require('../../assets/star.png'),
        social: require('../../assets/mgslog.png'),
        mgsbg: require('../../assets/mgsbg.png'),
        mgs: require('../../assets/mgsimg.png'),
    }


    return (
        <View style={{ backgroundColor: 'black', marginTop: 30, height: '100%', width: '100%' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10 }}>
                <Image
                    style={styles.headerimg}
                    source={IMAGES.mgs}
                />
            </View>
            <FlatGrid
                itemDimension={230}
                data={items}
                style={styles.gridView}
                spacing={10}
                renderItem={({ item }) => (
                    <View>
                        <ImageBackground source={IMAGES.mgsbg} resizeMode='cover' style={styles.mainContainer}>
                            <View style={styles.itemContainer}>    
                                <View style={styles.logoContainer}>
                                    <Image
                                    style={styles.logo}
                                    source={IMAGES.social}
                                    />
                                </View>
                                <Text style={styles.itemName}>Cahaya Dewi</Text>
                                <Image
                                    style={styles.star}
                                    source={IMAGES.star}
                                />
                            </View>
                        </ImageBackground>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginBottom: '18%',
        flex: 1,
        marginTop: -5,
        marginLeft: '-1%'
    },
    headerimg: {
        width: 50,
        height: 53,
    },
    logo: {
        width: 40,
        height: 45,
        margin: 10,
        position: 'relative'
    },
    mainContainer: {
        justifyContent: 'center',
        padding: 20,
        height: 110,
    },
    itemContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
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
        color: 'black',
        fontWeight: '600',
        marginLeft: 10,
        fontWeight: 'bold',
        marginTop: '5%'
    },
    star: {
        width: 20,
        height: 20,
        marginTop: '5%',
        marginLeft: '50%'
    },
});