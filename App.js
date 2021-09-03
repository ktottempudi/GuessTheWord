import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tutorial from './components/Tutorial';
import Welcome from './components/Welcome';
import Description from './components/Description';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigator} from './components/Routes';

export default function App() {
  let firstTime = false;
  const Stack = createNativeStackNavigator();
  return (
    <AppNavigator/>
/*    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen 
          name="Tutorial"
          component={Tutorial}
        />
        <Stack.Screen
          name="Description"
          component={Description}
         />
      </Stack.Navigator>
    </NavigationContainer>*/
/*    <View style={styles.container}>
      <Text>Welcome to the app</Text>
      <StatusBar style="auto" />
      {firstTime ? <Tutorial/> : <Welcome/>}
    </View>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
