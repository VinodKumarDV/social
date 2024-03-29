import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TextInput } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Ionicons from "react-native-vector-icons/Ionicons"


const IMAGES = {
    image1: require('../../assets/feed_images/1.jpg'),
    image2: require('../../assets/feed_images/2.jpg'),
    image3: require('../../assets/feed_images/3.jpg'),
    image4: require('../../assets/feed_images/4.jpg'),
    image5: require('../../assets/feed_images/5.jpg'),
    image6: require('../../assets/feed_images/6.jpg'),
    image7: require('../../assets/feed_images/7.jpg'),
    image8: require('../../assets/feed_images/8.jpg'),
    image9: require('../../assets/feed_images/9.jpg'),
    image10: require('../../assets/feed_images/10.jpg'),
    image11: require('../../assets/feed_images/11.jpg'),
    image12: require('../../assets/feed_images/12.jpg'),
    image13: require('../../assets/feed_images/5.jpg'),
    image14: require('../../assets/feed_images/6.jpg'),
    image15: require('../../assets/feed_images/7.jpg'),
    image16: require('../../assets/feed_images/8.jpg'),
    image17: require('../../assets/feed_images/9.jpg'),
    image18: require('../../assets/feed_images/10.jpg'),
    image19: require('../../assets/feed_images/11.jpg'),
    image20: require('../../assets/feed_images/12.jpg'),
    image21: require('../../assets/feed_images/1.jpg'),
    searchimg: require('../../assets/search.png'),
}

const img = require('../../assets/search.png')
const filter = require('../../assets/filter.png')

export default function Connections() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);

    const [items, setItems] = React.useState([
        { name: 'TURQUOISE', image: IMAGES.image1 },
        { name: 'EMERALD', image: IMAGES.image2 },
        { name: 'PETER RIVER', image: IMAGES.image3 },
        { name: 'AMETHYST', image: IMAGES.image4 },
        { name: 'WET ASPHALT', image: IMAGES.image5 },
        { name: 'GREEN SEA', image: IMAGES.image6 },
        { name: 'NEPHRITIS', image: IMAGES.image7 },
        { name: 'BELIZE HOLE', image: IMAGES.image8 },
        { name: 'WISTERIA', image: IMAGES.image9 },
        { name: 'MIDNIGHT BLUE', image: IMAGES.image10 },
        { name: 'SUN FLOWER', image: IMAGES.image11 },
        { name: 'CARROT', image: IMAGES.image12 },
        { name: 'ALIZARIN', image: IMAGES.image13 },
        { name: 'CLOUDS', image: IMAGES.image14 },
        { name: 'CONCRETE', image: IMAGES.image15 },
        { name: 'ORANGE', image: IMAGES.image16 },
        { name: 'PUMPKIN', image: IMAGES.image17 },
        { name: 'POMEGRANATE', image: IMAGES.image18 },
        { name: 'SILVER', image: IMAGES.image19 },
        { name: 'ASBESTOS', image: IMAGES.image20 },
        { name: 'BESTOS', image: IMAGES.image21 },
    ]);

    const win = Dimensions.get('window')


    return (
        <View style={{ backgroundColor: 'black', marginTop: 30, height: '100%', width: '100%', }}>
            <View style={styles.itemContainer}>
                <Image source={img} style={{
                    width: 35, height: 30,
                    transform: [
                        { scaleX: -1 }
                    ]}}/>
                <TextInput
                    placeholder={'Search Here......'}
                    placeholderTextColor='white'
                    onChangeText={onChangeSearch}
                    value={searchQuery}
                    style={{
                         borderBottomWidth: 2, color: 'white', borderBottomColor: 'white', fontSize: 20, paddingBottom: 8, paddingLeft: '12%', paddingRight: '11%', width: '100%', marginLeft: -35}}
                />
                <Image resizeMode='center' source={filter} tintColor='white' style={{
                    width: 35, height: 30, marginLeft: -35,
                    transform: [
                        { scaleX: -1 }
                    ]
                }} />
            </View>
            <FlatGrid
                itemDimension={280}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={10}
                
                // justifyContent= 'center'
                renderItem={({ item }) => (
                        <View>
                            <Image
                                resizeMode='cover'
                                style={styles.itemPhoto}
                                source={item.image}
                            />

                            <Image
                                style={styles.ico}
                                source={{
                                    uri: 'https://th.bing.com/th/id/R.2b07d18b76ffea3d3dcee98072caf790?rik=7Bcd%2ff9Ihs8i1Q&riu=http%3a%2f%2fb.rgbimg.com%2fcache1y59mK%2fusers%2fn%2fnh%2fnh313066%2f600%2foZJ542G.jpg&ehk=PprUaaFH6uwTxle1wccpX7Sk6V4PpNvWMSBYRvHw%2fbE%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
                                }}
                            />
                            <Text style={styles.itemName}>@{item.name}</Text>
                        </View>
                )}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        padding: 7,
        marginTop: 2,
        marginBottom: 30
    },
    itemContainer: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: 'row'
    },
    itemPhoto: {
        borderRadius: 50,
        padding: 10,
        height: 200,
        width: 360,
    },
    itemName: {
        fontSize: 10,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 45,
        marginTop: -23,
        marginBottom: 5
    },
    ico: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderColor: '#FFBF00',
        borderWidth: 2,
        marginTop: 5,
        marginLeft: 10
    },
});