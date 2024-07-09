import { Link } from "@tanstack/react-router";
import { startCase } from "lodash";
import { FC } from "react";
import { Route as PokemonRoute } from "../../routes/pokemon.index.route";

export const Pokemon: FC = () => {
  const { pokemon } = PokemonRoute.useLoaderData();

  return (
    <>
      <Link to="/">Back Home</Link>
      <h1>Pokemon</h1>
      {pokemon.map((poke: { name: string }) => (
        <li key={poke.name}>
          <Link to="/pokemon/$pokemonName" params={{ pokemonName: poke.name }}>
            {startCase(poke.name)}
          </Link>
        </li>
      ))}
    </>
  );
};
