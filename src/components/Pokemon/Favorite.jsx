import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import {
  addPokemonFavoriteApi,
  removePokemonFavoriteApi,
  isPokemonFavoriteApi,
} from "../../api/favorite";

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Favorite({ id }) {
  const [isFavorite, setIsFavorite] = useState(undefined);
  const [reloadCheck, setReloadCheck] = useState(false);

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      throw error;
    }
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
      onReloadCheckFavorite();
    } catch (error) {
      throw error;
    }
  };

  const onReloadCheckFavorite = () => {
    setReloadCheck(!reloadCheck);
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        setIsFavorite(response);
      } catch (error) {
        setIsFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  return (
    <Ionicons
      name={isFavorite ? "heart" : "heart-outline"}
      color="#fff"
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{ marginRight: 20 }}
    />
  );
}
