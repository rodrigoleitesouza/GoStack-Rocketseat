import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DBoard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: "Dashboard Page",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTintColor: "#FFF",
        }}
      />
    </Tab.Navigator>
  )
}

function Routes() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          //initialRouteName={isSigned ? "DBoard" : "SignIn"}
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
        <Stack.Screen
          name="DBoard"
          component={DBoard}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default Routes;
