import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens'; 
import { useFonts } from '@use-expo/font';
enableScreens();


export default function App() {

  let [fontLoaded] = useFonts({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
  if(!fontLoaded){
    return <AppLoading />
  }else{
    return <MealsNavigator />
  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
