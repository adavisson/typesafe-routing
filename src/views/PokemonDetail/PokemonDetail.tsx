import { Link, useMatch } from "@tanstack/react-router";
import React, { FC } from "react";
import { z } from "zod";
import { pokemonRoute } from "../routes";
import _ from "lodash";

const fetchPokemon = async (name: string) => {
  const pokemonResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${name}`
  );
  const pokemon = await pokemonResponse.json();

  return pokemon;
};

export const PokemonDetail: FC = () => {
  const {
    loaderData: { pokemon },
  } = useMatch(pokemonDetailRoute.id);

  return (
    <div style={{ padding: "1rem" }}>
      <Link to="/pokemon">
        <h5>Back to Pokemon</h5>
      </Link>
      <h1>{_.startCase(pokemon.name)}</h1>
      {pokemon.sprites.front_default && (
        <img
          src={pokemon.sprites.front_default}
          alt={`${pokemon.name}-front`}
        />
      )}
      {pokemon.sprites.back_default && (
        <img src={pokemon.sprites.back_default} alt={`${pokemon.name}-back`} />
      )}
      <p>
        <em>Abilities: </em>
        {pokemon.abilities.map(
          (ability: { ability: { name: string } }, index: number) =>
            index !== 0 ? ", " + ability.ability.name : ability.ability.name
        )}
      </p>
      <p>
        <em>Types: </em>
        {pokemon.types.map((type: { type: { name: string } }, index: number) =>
          index !== 0 ? ", " + type.type.name : type.type.name
        )}
      </p>
    </div>
  );
};

export const pokemonDetailRoute = pokemonRoute.createRoute({
  path: "$pokemonName",
  component: PokemonDetail,
  parseParams: ({ pokemonName }) => ({
    pokemonName: z.string().parse(pokemonName),
  }),
  stringifyParams: (params) => params,
  loader: async ({ params: { pokemonName } }) => {
    const pokemon = await fetchPokemon(pokemonName);

    return { pokemon };
  },
});
