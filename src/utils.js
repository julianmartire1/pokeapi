export const sharePokemon = (pokemon) => {
  const types = pokemon.types.map((type) => type.type.name).join(", ");
  const pokemonInfo = `${pokemon.name}, types: ${types}`;
  navigator.clipboard.writeText(pokemonInfo);
  alert("info copied.");
};
