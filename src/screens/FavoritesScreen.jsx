import React, { useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { Text, SafeAreaView, Button } from "react-native";

import { getPokemonFavoriteApi } from "../api/favorite";
import { getPokemonDetailsApi } from "../api/pokemon";

import useAuth from "../hooks/useAuth";

import PokemonList from "../components/PokemonList";
import NoLogged from "../components/NoLogged";

export default function FavoritesScreen() {
  const [pokemons, setPokemons] = useState(null);
  const { auth } = useAuth();

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonFavoriteApi();

          const pokemonsArray = [];
          for await (const id of response) {
            const pokemonDetails = await getPokemonDetailsApi(id);

            pokemonsArray.push({
              id: pokemonDetails.id,
              name: pokemonDetails.name,
              type1: pokemonDetails.types[0].type.name,
              type2: pokemonDetails.types[1]?.type?.name,
              order: pokemonDetails.order,
              image:
                pokemonDetails.sprites.other["official-artwork"].front_default,
            });
          }

          setPokemons(pokemonsArray);
        })();
      }
    }, [auth])
  );

  return (
    <SafeAreaView>
      {!auth ? <NoLogged /> : <PokemonList pokemons={pokemons} />}
    </SafeAreaView>
  );
}
