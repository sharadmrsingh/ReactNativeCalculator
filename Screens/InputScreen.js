import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button , TouchableOpacity } from 'react-native';
import FlatButton from '../CustomButton/button';
import ResultScreen from './ResultScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();


const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        fontWeight:"bold",
        marginTop:50,
        marginLeft:10,
        marginBottom:10,
    },
    inputStyle:{
        marginLeft:10,
        width:150,
        //borderWidth:1, //This is for making border from all 4 sides o.e rectangle
        borderBottomColor: '#000', // Add this to specify only bottom border color i.e only bottom line //This code also does the same thing, shows underline but it is used within TextInput:underlineColorAndroid={'black'}
        borderBottomWidth: 1,     // Add this to specify bottom border thickness
    },
})

const InputScreen = ({props,route,navigation}) =>  {
        return(
            <View style={{backgroundColor:"white",flex:1}}>
                <Text style={styles.textStyle}>First Number</Text>
                <TextInput style={styles.inputStyle} placeholder='Enter 1st number'></TextInput>
                <Text style={styles.textStyle}>Second Number</Text>
                <TextInput style={styles.inputStyle} placeholder='Enter 2nd number'></TextInput>
                <View style={{marginTop:20,marginLeft:10,width:120}}><FlatButton text="CALCULATE" onPress={()=>navigation.navigate('Result', {
              paramKey: "",
            })}/></View>
                <Text style={{marginLeft:10}}>{route.params.paramKey}</Text>
            </View>
        )
}


/*function Move() {
    return (
      <NavigationContainer initialRouteName="InputScreen" screenOptions={{
        header:(props) => <CustomNavigationBar {...props} />,
      }}>
        <Stack.Navigator>
          <Stack.Screen name="InputScreen" component={InputScreen} options={{ title: 'Calc',headerStyle: {
              backgroundColor: '#3333ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
              }}/>
          <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Calc',headerStyle: {
              backgroundColor: '#3333ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
              }}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }*/


export default InputScreen;


//<View style={{marginTop:20,marginLeft:10,width:100}}><Button title="CALCULATE" color="white"></Button></View>