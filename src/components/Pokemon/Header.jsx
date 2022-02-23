import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { getColorsByPokemonType } from "../../utils/getColorByPokemonType";

export default function Header({ id, image, name, order, type1, type2 }) {
  const pokemonColor = getColorsByPokemonType(type1, type2);

  return (
    <>
      <LinearGradient colors={pokemonColor} style={styles.bgStyles} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.order}>#{`${id}`.padStart(3, 0)} </Text>
        </View>
        <View style={styles.contentImage}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  bgStyles: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 40,
  },
  name: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
    textTransform: "capitalize",
  },
  order: {
    color: "white",
    fontWeight: "bold",
  },
  contentImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 30,
  },
  image: {
    width: 250,
    height: 300,
    resizeMode: "contain",
  },
});
