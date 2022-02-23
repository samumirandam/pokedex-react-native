import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PokedexScreen from "../screens/PokedexScreen";
import PokemonScreen from "../screens/PokemonScreen";

const Stake = createStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stake.Navigator>
      <Stake.Screen
        name="PokeDex"
        component={PokedexScreen}
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
