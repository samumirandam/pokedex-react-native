import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";

import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";

import PokemonList from "../components/PokemonList";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState([]);
  const [nextUrl, setNextUrl] = useState(null);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      const pokemonsArray = [];

      for await (const pokemon of response.results) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        setNextUrl(response.next);
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type1: pokemonDetails.types[0].type.name,
          type2: pokemonDetails.types[1]?.type?.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other["official-artwork"].front_default,
        });
      }

      setPokemons([...pokemons, ...pokemonsArray]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  return (
    <SafeAreaView>
      <PokemonList
        pokemons={pokemons}
        loadPokemons={loadPokemons}
        isNext={nextUrl}
      />
    </SafeAreaView>
  );
}
