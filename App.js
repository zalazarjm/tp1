// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeStack from './src/screens/Home';
import ProfileStack from './src/screens/Login';
import ListsStack from './src/screens/Lists';
import MapsStack from './src/screens/Maps';
import ListDetailScreen from './src/screens/ListDetail';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={ProfileStack} />
        <Stack.Screen name="Home" component={HomeStack} />
        <Stack.Screen name="Lists" component={ListsStack} />
        <Stack.Screen name="ListDetail" component={ListDetailScreen} />
        <Stack.Screen name="Maps" component={MapsStack} />
        {/* Agrega más pantallas según tus necesidades */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
