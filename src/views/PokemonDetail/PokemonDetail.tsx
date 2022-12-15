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
    <>
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
        <strong>Abilities: </strong>
        {pokemon.abilities.map(
          (ability: { ability: { name: string } }, index: number) => (
            <span key={ability.ability.name}>
              {index !== 0 ? ", " + ability.ability.name : ability.ability.name}
            </span>
          )
        )}
      </p>
      <p>
        <strong>Types: </strong>
        {pokemon.types.map(
          (type: { type: { name: string } }, index: number) => (
            <span key={type.type.name}>
              {index !== 0 ? ", " + type.type.name : type.type.name}
            </span>
          )
        )}
      </p>
    </>
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
  meta: { hasCrumb: true },
});
