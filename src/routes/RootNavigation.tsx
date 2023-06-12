import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomNavigation from './BottomNavigation';
import StackNavigation from './StackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={BottomNavigation} name="bottomTab" />
        <>{StackNavigation(Stack)}</>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
