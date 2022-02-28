import React, { useState } from "react";
import { Text, SafeAreaView, Button } from "react-native";

import { getPokemonFavoriteApi } from "../api/favorite";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState(null);

  const checkFavorites = async () => {
    const response = await getPokemonFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
}
