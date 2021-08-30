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
