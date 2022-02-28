import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PokemonScreen from "../screens/PokemonScreen";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stake = createStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stake.Navigator>
      <Stake.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
      <Stake.Screen
        name="Pokemon"
        component={PokemonScreen}
        options={{
          title: "",
          headerShown: true,
          headerTransparent: true,
          headerShadowVisible: false,
        }}
      />
    </Stake.Navigator>
  );
}
