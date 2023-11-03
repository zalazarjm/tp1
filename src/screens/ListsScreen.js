// ListsScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { getPokemonList } from '../screens/api'; // Importa las funciones de la API

const ListsScreen = ({ navigation }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    getPokemonList()
      .then((response) => {
        setPokemonList(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon list', error);
      });
  }, []);

  const renderPokemonItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('PokemonDetail', { pokemonName: item.name })}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={pokemonList}
        keyExtractor={(item) => item.name}
        renderItem={renderPokemonItem}
      />
    </View>
  );
};

export default ListsScreen;
