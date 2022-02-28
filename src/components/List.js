import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default function List() {
  const [items, setItems] = React.useState([
    { name: 'TURQUOISE', code: '#1abc9c' },
    { name: 'EMERALD', code: '#2ecc71' },
    { name: 'PETER RIVER', code: '#3498db' },
    { name: 'AMETHYST', code: '#9b59b6' },
    { name: 'WET ASPHALT', code: '#34495e' },
    { name: 'GREEN SEA', code: '#16a085' },
    { name: 'NEPHRITIS', code: '#27ae60' },
    { name: 'BELIZE HOLE', code: '#2980b9' },
    { name: 'WISTERIA', code: '#8e44ad' },
    { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
    { name: 'SUN FLOWER', code: '#f1c40f' },
    { name: 'CARROT', code: '#e67e22' },
    { name: 'ALIZARIN', code: '#e74c3c' },
    { name: 'CLOUDS', code: '#ecf0f1' },
    { name: 'CONCRETE', code: '#95a5a6' },
    { name: 'ORANGE', code: '#f39c12' },
    { name: 'PUMPKIN', code: '#d35400' },
    { name: 'POMEGRANATE', code: '#c0392b' },
    { name: 'SILVER', code: '#bdc3c7' },
    { name: 'ASBESTOS', code: '#7f8c8d' },
  ]);

  const IMAGES = {
    home: require('../../assets/homeimg.png'),
    social: require('../../assets/socialimg.jpg'),
    mgs: require('../../assets/mgsimg.png'),
}

  const ButtonAlert = () =>
    Alert.alert(
      "Joined",
      "Welcome to team",
    );

  return (
    <View style={{ backgroundColor: 'black', marginTop: 30, height: '100%', width: '100%'}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Image
          style={styles.headerimg}
          source={IMAGES.home}
        />
        <Image
          style={styles.headersoc}
          source={IMAGES.social}
        />
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
          <View style={[styles.itemContainer, { backgroundColor: '#ecf0f1' }]}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemCode}>{item.code}</Text>
            <TouchableOpacity
              onPress={ButtonAlert}
              style={{ backgroundColor: '#FFFD6F', width: 60, height: 30, marginTop: 5, marginLeft: '75%', position: 'relative', borderRadius: 2, textAlign: 'center' }}>
              <Text style={{ fontSize: 15, color: 'black', fontWeight: 'bold', textAlign: 'center', marginTop: '5%' }}>Join</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerimg: {
    width: 50,
    height: 53,
  },
  headersoc: {
    width: 50,
    height: 55,
  },
  gridView: {
    marginBottom: '18%',
    flex: 1,
    marginTop: -5
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    padding: 10,
    minHeight: 50
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: 'black',
  },
});