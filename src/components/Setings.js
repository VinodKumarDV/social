import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const IMAGES = {
    social: require('../../assets/socialimg.png'),
}

export default function Setings() {
  return (
      <View style={{ backgroundColor: 'black', marginTop: 30, height: '100%', width: '100%', alignItems: 'center' }}>
          <Text style={styles.itemName}>Refer friends</Text>
          <Text style={styles.itemName}>Allow invitations</Text>
          <Text style={styles.itemName}>Profile visibility status</Text>
          <Text style={styles.itemName}>Notifications</Text>
          <Text style={styles.itemName}>Privacy policy</Text>
          <Text style={styles.itemName}>Help</Text>
          <Text style={styles.itemName}>Logout</Text>

          <View style={styles.itemContainer}>
              <Image
                  style={styles.logo}
                  source={IMAGES.social}
              />
              <Text style={styles.version}>v.1.1.1</Text>
          </View>
          
    </View>
  )
}

const styles = StyleSheet.create({
    itemName: {
        fontSize: 26,
        color: 'white',
        fontWeight: '600',
        marginTop: '5%',
        borderWidth: 1,
        paddingBottom: 5,
        paddingLeft: 18,
        borderBottomColor: 'white',
        width: '105%'
    },
    itemContainer: {
        marginTop: 60,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    version: {
        fontSize: 10,
        color: 'white',
        marginTop: '10.7%',
        marginLeft: -5
    },
    logo: {
        width: 55,
        height: 57,
        marginTop: 13,
        marginLeft: 10,
    },
});
