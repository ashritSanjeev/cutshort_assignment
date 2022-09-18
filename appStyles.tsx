import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;



export const appStyles = StyleSheet.create({
    container: {
        // alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#0E164D',
        // flexDirection: 'column'
    },
    corouselContainer: {
        height: HEIGHT/4 * 1.2,
        width: WIDTH/2 * 1.5,
        // alignSelf: 'flex-end',
        borderTopRightRadius: 100,
        backgroundColor: '#17288E'
    }

})
