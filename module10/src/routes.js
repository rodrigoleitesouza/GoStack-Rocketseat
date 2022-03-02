import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import SelectProvider from './pages/New/SelectProvider';
import SelectDateTime from './pages/New/SelectDateTime';
import Confirm from './pages/New/Confirm';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/*
function Routes() {
  const isSigned = useSelector(state => state.auth.signed);

  return (
    <NavigationContainer>

      {isSigned ? (<>
        <Tab.Navigator
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#7159c1",
            },
            headerTintColor: "#FFF",
            tabBarHideOnKeyboard: true,
            tabBarActiveTintColor: "#FFF",
            tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
            tabBarInactiveBackgroundColor: "#8D41A8",
            tabBarActiveBackgroundColor: "#8D41A8",
          }}
        >
          <Tab.Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              title: "Agendamentos",
              tabBarLabel: 'Agendamentos',
              tabBarIcon: () => <Icon name="event" size={20} color="#FFF" />,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
              title: "Meu Perfil",
              tabBarLabel: 'Meu Perfil',
              tabBarIcon: () => <Icon name="person" size={20} color="#FFF" />,
            }}
          />
          <Tab.Screen
            name="New"
            component={SelectProvider}
            options={({ navigation }) => ({
              title: "Selecione o prestador",
              tabBarLabel: 'Agendar',
              headerTransparent: true,
              headerTintColor: '#FFF',

              headerLeft: () => (
                <TouchableOpacity onPress={() => {navigation.navigate('Dashboard')}}>
                  <Icon name="chevron-left" size={20} color="#FFF" />
                </TouchableOpacity>
              ),
              headerLeftContainerStyle: {
                marginLeft: 15,
              },
              tabBarIcon: () => <Icon name="add-circle-outline" size={20} color="#FFF" />,
            })}
          />
        </Tab.Navigator>
      </>) : (<>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: "SignIn Page1",
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
            name="SelectDateTime"
            component={SelectDateTime}
            options={{
              title: "SelectDateTime Page",
              headerTitleAlign: "center",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#7159c1",
              },
              headerTintColor: "#FFF",
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
            }}
          />
          <Stack.Screen
            name="Confirm"
            component={Confirm}
            options={{
              title: "Confirm Page",
              headerTitleAlign: "center",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#7159c1",
              },
              headerTintColor: "#FFF",
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
            }}
          />
        </Stack.Navigator>
      </>)}
    </NavigationContainer>
  );
}
*/

function Routes() {
  const isSigned = useSelector(state => state.auth.signed);

  function Tabs() {
    return (
      <Tab.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#7159c1",
          },
          headerTintColor: "#FFF",
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "rgba(255, 255, 255, 0.6)",
          tabBarInactiveBackgroundColor: "#8D41A8",
          tabBarActiveBackgroundColor: "#8D41A8",
        }}
      >
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: "Agendamentos",
            tabBarLabel: 'Agendamentos',
            tabBarIcon: () => <Icon name="event" size={20} color="#FFF" />,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Meu Perfil",
            tabBarLabel: 'Meu Perfil',
            tabBarIcon: () => <Icon name="person" size={20} color="#FFF" />,
          }}
        />
        <Tab.Screen
          name="New"
          component={SelectProvider}
          options={({ navigation }) => ({
            title: "Selecione o prestador",
            tabBarLabel: 'Agendar',
            headerTransparent: true,
            headerTintColor: '#FFF',

            headerLeft: () => (
              <TouchableOpacity onPress={() => { navigation.navigate('Dashboard') }}>
                <Icon name="chevron-left" size={20} color="#FFF" />
              </TouchableOpacity>
            ),
            headerLeftContainerStyle: {
              marginLeft: 15,
            },
            tabBarIcon: () => <Icon name="add-circle-outline" size={20} color="#FFF" />,
          })}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>

      {isSigned ? (<>
        <Stack.Navigator>
          <Stack.Screen
            name="Tabs"
            component={Tabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SelectDateTime"
            component={SelectDateTime}
            options={({ navigation }) => ({
              title: "Selecione o horário",
              headerTitleAlign: "center",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#7159c1",
              },
              headerTintColor: "#FFF",
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                  <Icon name="chevron-left" size={20} color="#FFF" />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Confirm"
            component={Confirm}
            options={{
              title: "Confirm Page",
              headerTitleAlign: "center",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: "#7159c1",
              },
              headerTintColor: "#FFF",
              headerTransparent: true,
              headerLeftContainerStyle: {
                marginLeft: 20,
              },
            }}
          />
        </Stack.Navigator>
      </>) : (<>
        <Stack.Navigator>
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{
              title: "SignIn Page1",
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
      </>)}
    </NavigationContainer>
  );
}

export default Routes;
