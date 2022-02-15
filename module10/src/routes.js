import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="SignIn"
         component={SignIn}
         options={{
          title: "SignIn Page",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTintColor: "#FFF",
         }}
        />
        <Stack.Screen
         name="SignUp"
         component={SignUp}
         options={{
          title: "SignUp Page",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTintColor: "#FFF",
         }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
