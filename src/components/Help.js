import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Help() {
    return (
        <View style={{ backgroundColor: 'black', marginTop: 30, height: '100%', width: '100%', alignItems: 'center' }}>
            <Text style={styles.itemName}>Help</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    itemName: {
        fontSize: 26,
        color: 'white',
        fontWeight: '600',
        justifyContent: 'center'
    },
    itemContainer: {
        marginTop: 60,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'center'
    },
});
