import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';
 
const FlatButton = ({ text, onPress , navigation }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#fcfcf8',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        //textTransform: 'uppercase',
        
        fontSize: 16,
        textAlign: 'center',
    }
});

export default FlatButton;