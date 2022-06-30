import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './Screens/InputScreen';
import ResultScreen from './Screens/ResultScreen';



const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get('window');



//Header/App Bar Styling.Here we are using shorthand of styles i.e Shorthand of Stylesheet.create({})
const styles = {
  viewStyle: {
    backgroundColor: '#3333ff',
    justifyContent: 'center',
    alignItems: 'left',
    height: 70,
    paddingTop: 30,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    marginLeft: 10,
  },
  button: {
    backgroundColor: "#3333ff",
    paddingTop:6,
    borderRadius: 10,
    marginTop:20,
    alignItems:'center',
    width: "100%",
    height:'5%',
    borderColor: "black",
    borderWidth: 2,
  },
  buttonText: {
    color: "black",
    fontWeight:'bold'
  },
};




//class LandingPage extends React.Component 
const LandingPage = (props) => 
{
  //render() {
    return (
      <>
      <View style={{ alignItems: 'center', backgroundColor: 'aqua', flex: 1 }}>


          <Text style={{ fontSize: 20, marginTop: 20, fontWeight: 'bold' }}>React Native Calculator</Text>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Input', {
              paramKey: "+",
            })} style={styles.button}>
            <Text style={styles.buttonText}>ADDITION</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={()=>props.navigation.navigate('Input', {
              paramKey: "-",
            })} style={styles.button}>
            <Text style={styles.buttonText}>SUBTRACTION</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Input', {
              paramKey: "*",
            })} style={styles.button}>
            <Text style={styles.buttonText}>MULTIPLICATION</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>props.navigation.navigate('Input', {
              paramKey: "/",
            })} style={styles.button}>
            <Text style={styles.buttonText}>DIVISION</Text>
          </TouchableOpacity>

        </View></>
        
      
    )
  //}
}



const  App = () => {
    return (
      <NavigationContainer initialRouteName="Landing" screenOptions={{
        header:(props) => <CustomNavigationBar {...props} />,
      }}>
        <Stack.Navigator>
          <Stack.Screen name="Landing" component={LandingPage} options={{ title: 'Calc',headerStyle: {
              backgroundColor: '#3333ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
              }}/>
          <Stack.Screen name="Input" component={InputScreen} options={{ title: 'Calc',headerStyle: {
              backgroundColor: '#3333ff',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
              }}
              />
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
  }
  
  
  export default App;




//Partition for comments


//export default LandingPage;

//export default createAppContainer(AppNavigator);  


// <StatusBar barStyle="dark-content" />

//Header/App Bar
  /*static navigationOptions = {  
    title: 'HeaderTitle',  
    headerStyle: {  
        backgroundColor: '#f4511e',  
    },  
    headerTintColor: '#0ff',  
    headerTitleStyle: {  
       fontWeight: 'bold',  
    },  
};  
*/

//This below code is for header which is giving error on tablet
/*<>


<Header display={true} headerText="Calc" />
*/


//Header/App Bar
/*const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  )
}
*/


//This below code is for Appbar back button and other buttons
/*<Appbar.BackAction onPress={_goBack} />
<Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        */


//App Bar header Code without Stack perfectly working

/*import { createStackNavigator, createAppContainer } from "react-navigation";  


const AppNavigator = createStackNavigator({  
  Home: {  
      screen: LandingPage  
  }  
});  */


 /* Adding media query..
    '@media (height: 720px)': {
      height: '8%',
    },
    '@media (height: 800px)': {
      height: '9%',
    },
    */

    /*const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');
  */

  /*
// Note-Not working
function CustomNavigationBar({ navigation, back }) {
  return (
    <Appbar.Header style={{backgroundColor:'#3333ff'}}>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title="Calc" />
    </Appbar.Header>
  );
}
*/