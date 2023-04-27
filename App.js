import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen
          name="Lista de elementos"
          component={ListScreen}
        />

        <Stack.Screen
          name= "Detalles"
          component={DetailScreen}
          options={({ route}) => ({
            title: route.params.photo.author,
          })}
         
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

