import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { PokemonDetail } from "../views/PokemonDetail/PokemonDetail";

const fetchPokemon = async (name: string) => {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const pokemon = await pokemonResponse.json();

  return pokemon;
};

export const Route = createFileRoute("/pokemon/$pokemonName/")({
  component: PokemonDetail,
  loader: async ({ params: { pokemonName } }) => {
    const pokemon = await fetchPokemon(pokemonName);
    return { pokemon };
  },
  params: {
    parse: ({ pokemonName }) => ({
      pokemonName: z.string().parse(pokemonName),
    }),
    stringify: ({ pokemonName }) => ({
      pokemonName,
    }),
  },
});
