import { View, Text, StyleSheet } from "react-native";
import React from "react";

import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

export default function Type({ type1, type2 }) {
  return (
    <View style={styles.content}>
      <View
        style={{
          ...styles.pill,
          backgroundColor: getColorByPokemonType(type1),
        }}
      >
        <Text style={styles.type}>{type1}</Text>
      </View>
      {type2 && (
        <View
          style={{
            ...styles.pill,
            backgroundColor: getColorByPokemonType(type2),
          }}
        >
          <Text style={styles.type}>{type2}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  type: {
    textTransform: "capitalize",
  },
});
