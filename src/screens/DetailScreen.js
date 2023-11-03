// PokemonDetailScreen.js

import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { getPokemonDetail } from '../screens/api'; // Importa la función de la API

const PokemonDetailScreen = ({ route }) => {
  const [pokemonDetail, setPokemonDetail] = useState(null);
  const { pokemonName } = route.params;

  useEffect(() => {
    getPokemonDetail(pokemonName)
      .then((response) => {
        setPokemonDetail(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Pokemon detail', error);
      });
  }, [pokemonName]);

  if (!pokemonDetail) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Name: {pokemonDetail.name}</Text>
      <Text>Height: {pokemonDetail.height}</Text>
      <Text>Weight: {pokemonDetail.weight}</Text>
      {/* Mostrar otros detalles del Pokémon según la API */}
    </View>
  );
};

export default PokemonDetailScreen;
