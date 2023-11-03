// api.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const getPokemonList = () => {
  return api.get('pokemon');
};

export const getPokemonDetail = (pokemonId) => {
  return api.get(`pokemon/${pokemonId}`);
};
