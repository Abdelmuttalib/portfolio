import React, { useEffect, useState } from "react";
import useSWR from "swr";

import PokemonCard from "./PokemonCard";
import PokemonCardLoader from "./PokemonCardLoader";
import { PokemonT } from "./types";

const fetcher = (apiUrl: string) =>
  fetch(apiUrl).then((response) => response.json());

const PokemonCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonT[]>([]);
  const [pokemonId, setPokemonId] = useState(1);
  const { data } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${pokemonId !== 3 ? pokemonId : 15}`,
    fetcher
  );

  const differenceToAllPokemons = 10 - pokemonId;

  useEffect(() => {
    const getPokemonSpecificData = () => {
      const {
        name,
        url,
        base_experience: baseExperience,
        weight,
        abilities,
        sprites,
      } = data;

      const pokemonData = {
        name,
        url,
        baseExperience,
        weight,
        abilities,
        sprites,
      };

      return pokemonData;
    };

    if (data) {
      const pokemon: PokemonT = getPokemonSpecificData();
      setPokemons((prevPokemons) => [...prevPokemons, pokemon]);

      // get 10 pokemons data
      if (pokemonId < 10) setPokemonId(pokemonId + 1);
    }
  }, [data, pokemonId]);

  return (
    <div className="grid gap-x-4 gap-y-4 md:grid-cols-2 xl:grid-cols-3">
      {pokemons &&
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.url} pokemon={pokemon} />
        ))}
      {pokemons.length !== 10 &&
        Array.from(Array(differenceToAllPokemons + 1).keys()).map((n) => (
          <PokemonCardLoader key={n} />
        ))}
    </div>
  );
};

export default PokemonCardList;
