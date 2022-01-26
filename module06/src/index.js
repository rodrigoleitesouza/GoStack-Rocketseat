/*
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './pages/User';
import Main from './pages/Main';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="9999" component={Main} />
        <Stack.Screen name="Home333" component={User} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
*/

/*
import * as React from 'react';
import { View, Text } from 'react-native';
import "./config/ReactotronConfig";

export default function App() {
  return (
    <View>
      <Text>Apenas um teste!</Text>
      <Text>Abaix2889!</Text>
    </View>
  );
}
*/

//import 'react-native-gesture-handler';
import * as React from 'react';
import { StatusBar } from 'react-native';

import "./config/ReactotronConfig";

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle='light-content' backgroundColor="#7159c1"/>
      <Routes />
    </>
  );
}


