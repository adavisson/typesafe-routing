import { createFileRoute } from "@tanstack/react-router";
import { Pokemon } from "../views/Pokemon/Pokemon";

const fetchPokemon = async () => {
  const pokemonResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=150"
  );
  const pokemon = await pokemonResponse.json();

  return pokemon.results;
};

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
  loader: async () => {
    const pokemon = await fetchPokemon();

    return { pokemon };
  },
});
