import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import User from './pages/User';
import Main from './pages/Main';


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="Main"
         component={Main}
         options={{
          title: "Usuários",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTintColor: "#FFF",
         }}
        />
        <Stack.Screen
         name="User"
         component={User}
         options={{
          title: "Repositórios",
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
