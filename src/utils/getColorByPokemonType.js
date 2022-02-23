import { POKEMON_TYPE_COLORS } from "./constants";

export const getColorByPokemonType = (type) => {
  return POKEMON_TYPE_COLORS[type.toLowerCase()];
};

export const getColorsByPokemonType = (type1, type2) => {
  if (type2) {
    return [
      POKEMON_TYPE_COLORS[type1.toLowerCase()],
      POKEMON_TYPE_COLORS[type2.toLowerCase()],
    ];
  }
  return [
    POKEMON_TYPE_COLORS[type1.toLowerCase()],
    POKEMON_TYPE_COLORS[type1.toLowerCase()],
  ];
};
