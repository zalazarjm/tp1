// Header.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = ({ title, leftComponent, rightComponent }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>{leftComponent}</TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>{rightComponent}</TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: 'lightblue',
  },
  title: {
    fontSize: 20,
  },
};

export default Header;
