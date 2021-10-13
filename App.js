import 'react-native-gesture-handler';
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator} from '@react-navigation/drawer';
import {ScaledSheet} from 'react-native-size-matters'
import Home from './components/Home';
import Choice from './components/Choice';
import Result from './components/Result'
import Game from './components/Game';
import Level from './components/Level';
import DrawerContent from './components/Menu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const NavigationDrawerStructure = (props)=> {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={()=> toggleDrawer()}>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png'}}
          style={{
            width: 40,
            height: 40,
            marginLeft: 10
          }}
        />
      </TouchableOpacity>
    </View>
  );
}


function Menu({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Menu"
      screenOptions={{
        headerLeft: ()=>
          <NavigationDrawerStructure
            navigationProps={navigation}
          />,
        headerStyle: {
          backgroundColor: '#C4E9F8', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold',
          marginLeft: '25%' //Set Header text style
        }
      }}>
      <Stack.Screen
    name='Home'
    component={Home}
    options={{
      title: 'MATHGAME',
    }}
    />
      <Stack.Screen
        name="Choice"
        component={Choice}
        options={{
          title: 'MATHGAME', //Set Header Title
          
        }}/>
      <Stack.Screen
    name='Level'
    component={Level}
    options={{
      title: 'MATHGAME',
    }}
    />
      <Stack.Screen
    name='Game'
    component={Game}
    options={{
      title: 'MATHGAME',
    }}
    />

  <Stack.Screen
    name='Result'
    component={Result}
    options={{
      title: 'MATHGAME',
    }}
    />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
        drawerContentOptions={{
          activeTintColor: '#C4E9F8',
          itemStyle: { marginVertical: 5 },
        }}>
        <Drawer.Screen name={'Home'} component={Menu} />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
}

export default App;