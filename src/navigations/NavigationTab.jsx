import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import PokedexNavigation from "./PokedexNavigation";

import PokedexScreen from "../screens/PokedexScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import AccountScreen from "../screens/AccountScreen";

import { getRamdomPokemonColorType } from "../utils/getColorByPokemonType";
import FavoriteNavigation from "./FavoriteNavigation";

const Tab = createBottomTabNavigator();

export default function NavigationTab() {
  const renderPokeBal = () => (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -18 }}
    />
  );

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let iconName;

      if (route.name === "Pokedex") {
        iconName = focused ? "library" : "library-outline";
      } else if (route.name === "Account") {
        iconName = focused ? "person" : "person-outline";
      } else if (route.name === "Favorites") {
        iconName = focused ? "heart" : "heart-outline";
      }
      return <Ionicons name={iconName} size={size} color={color} />;
    },
    tabBarActiveTintColor: getRamdomPokemonColorType(),
    tabBarInactiveTintColor: "gray",
    // headerShown: false,
  });

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Favorites"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          headerTitle: "Favoritos",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => renderPokeBal(),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarLabel: "Mi cuenta", headerTitle: "Mi cuenta" }}
      />
    </Tab.Navigator>
  );
}
