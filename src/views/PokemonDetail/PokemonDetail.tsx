import { Link } from "@tanstack/react-router";
import { startCase } from "lodash";
import { FC } from "react";
import { Route as PokemonDetailRoute } from "../../routes/pokemon.$pokemonName.index.route";

export const PokemonDetail: FC = () => {
  const { pokemon } = PokemonDetailRoute.useLoaderData();

  return (
    <>
      <Link to="/pokemon">
        <h5>Back to Pokemon</h5>
      </Link>
      <h1>{startCase(pokemon.name)}</h1>
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
