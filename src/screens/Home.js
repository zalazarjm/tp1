// Home.js
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import Header from '../components/Header';

const Home = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    if (screenName === 'Home') {
      Alert.alert('Pilar Tecno', 'Ya te encuentras en la pantalla de inicio');
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <View>
      <Header title="Pilar Tecno" />
      <View style={styles.container}>
      <Button title="Login" onPress={() => navigateToScreen('Login')} />
      <Button title="Home" onPress={() => navigateToScreen('Home')} />
      <Button title="Lists" onPress={() => navigateToScreen('Lists')} />
      <Button title="ListDetail" onPress={() => navigateToScreen('ListDetail')} />
      <Button title="Maps" onPress={() => navigateToScreen('Maps')} />
        {/* Agrega más botones para otras pantallas */}
      </View>
    </View>
  );
};

const styles = {
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
};

export default Home;
