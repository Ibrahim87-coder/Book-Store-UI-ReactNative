import React from 'react';
import {StyleSheet,View} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';

import tabs from './src/navigation/tabs';
import { BookDetail } from './src/screens';


const theme ={
  ...DefaultTheme,
  colors:{
    ...DefaultTheme.colors,
    border:'transparent'
  }
}

const Stack = createNativeStackNavigator();

const App= () => {
  
  const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 1000,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 1,
      restSpeedThreshold: 1,
    },
  };

  
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
      >

        {/* Tabs */}
        <Stack.Screen name="HomeScreen" component={tabs}></Stack.Screen>
        {/* Screens */}
        <Stack.Screen name="BookDetail" component={BookDetail} options={{
    headerShown: false,
    transitionSpec: {
      open: config,
      close: config,
    },
  }}></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
