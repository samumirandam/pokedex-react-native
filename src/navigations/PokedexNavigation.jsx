import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stake = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stake.Navigator screenOptions={{ headerShown: false }}>
      <Stake.Screen name="PokeDex" component={PokedexScreen} />
      <Stake.Screen name="Pokemon" component={PokemonScreen} />
    </Stake.Navigator>
  );
}
