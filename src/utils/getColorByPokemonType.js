import { POKEMON_TYPE_COLORS } from "./constants";

const getColorsByPokemonType = (type1, type2) => {
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

export default getColorsByPokemonType;
