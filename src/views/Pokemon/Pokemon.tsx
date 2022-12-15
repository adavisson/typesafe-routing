import { Link, useMatch } from "@tanstack/react-router";
import _ from "lodash";
import React, { FC } from "react";
import { pokemonRoute } from "../routes";

const fetchPokemon = async () => {
  const pokemonResponse = await fetch(
    "https://pokeapi.co/api/v2/pokemon/?limit=150"
  );
  const pokemon = await pokemonResponse.json();

  return pokemon;
};

export const Pokemon: FC = () => {
  const {
    loaderData: { pokemon },
  } = useMatch(pokemonIndexRoute.id);

  return (
    <>
      <Link to="/">Back Home</Link>
      <h1>Pokemon</h1>
      {pokemon.map((poke: { name: string }) => (
        <li key={poke.name}>
          <Link to="/pokemon/$pokemonName" params={{ pokemonName: poke.name }}>
            {_.startCase(poke.name)}
          </Link>
        </li>
      ))}
    </>
  );
};

export const pokemonIndexRoute = pokemonRoute.createRoute({
  path: "/",
  component: Pokemon,
  loader: async () => {
    const pokemon = await fetchPokemon();

    return { pokemon: pokemon.results };
  },
});
