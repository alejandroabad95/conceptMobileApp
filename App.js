import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import ListScreen from './src/screens/ListScreen';
import DetailScreen from './src/screens/DetailScreen';


const Stack = createNativeStackNavigator();

const MyStack = () => {

  StatusBar.setBarStyle('light-content');

  return (

    
    <NavigationContainer>
          <Stack.Navigator
          screenOptions={{
          headerStyle: { backgroundColor: '#3B5998' },
        }}
      >
        <Stack.Screen
          name="Lista de elementos"
          component={ListScreen}
          options={
            {headerShown: false}
          }
          
        />

        <Stack.Screen
          name= "Detalles"
          component={DetailScreen}
          options={({ route}) => ({
            title: route.params.photo.author,
            headerTintColor: '#fff'
          })}
         
          />

        </Stack.Navigator>
      </NavigationContainer>
    

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});



export default MyStack




