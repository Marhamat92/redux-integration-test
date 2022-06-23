import React from 'react'
import { SafeAreaView,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';
import UserProvider from './context/provider.js';
 

const Tab = createBottomTabNavigator();

function Routes() {


  return (
    <UserProvider>
     <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="PrimaryScreen" component={Primary} />
        <Tab.Screen name="SecondaryScreen" component={Secondary} />
      </Tab.Navigator>
    </NavigationContainer>
  </UserProvider>
  )
}

export default Routes