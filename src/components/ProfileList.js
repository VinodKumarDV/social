import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

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
}

export default function ProfileList() {
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

  return (
    <FlatGrid
      itemDimension={80}
      data={items}
      style={styles.gridView}
      // staticDimension={300}
      // fixed
      spacing={10}
      // justifyContent= 'center'
      renderItem={({ item }) => (
        <View>
          <Image
            style={styles.itemPhoto}
            source={item.image}
          />
          <Text style={styles.itemName}>{item.name}</Text>
          {/* <Text style={styles.itemCode}>{item.code}</Text> */}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    marginBottom: '66%',
    padding: 7,
    
  },
  itemPhoto: {
    borderRadius: 5,
    padding: 10,
    height: 100,
    width: 100
  },
  itemName: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});