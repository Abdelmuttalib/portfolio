import React from "react";

import NextImage from "@/components/NextImage";

import { PokemonT } from "./types";

type Props = {
  pokemon: PokemonT;
};

const PokemonCard = ({ pokemon }: Props) => {
  const { name: pokemonName, sprites, baseExperience, abilities } = pokemon;
  const pokemonImage = sprites.front_default;
  return (
    <div className="group flex h-44 w-96 transform items-center rounded bg-white px-3 transition-all duration-100 ease-linear hover:scale-105">
      <div className="flex w-2/5 flex-col items-center justify-center gap-3">
        {pokemonImage && (
          <NextImage
            className="relative h-24 w-24 rounded-full border-gray-100 bg-gray-200 duration-200 ease-linear group-hover:scale-110"
            src={pokemonImage}
            alt={`The ${pokemonName} Pokemon`}
          />
        )}
        <p className="text-2xl font-semibold leading-6 text-gray-900">
          {pokemonName}
        </p>
      </div>
      <div className="w-3/5 space-y-3 pl-4">
        <div className="flex flex-col gap-1">
          <p className="text-md font-medium">Abilities</p>
          <p className="flex flex-wrap gap-1">
            {abilities.map((ability) => (
              <span
                key={ability.ability.url}
                className="w-fit rounded-full bg-gray-200 py-1 px-3 text-sm font-semibold tracking-wide text-gray-500"
              >
                {ability.ability.name}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-medium">Base Experience</p>
          <span className="w-fit rounded-full bg-gray-200 py-1 px-3 text-sm font-semibold text-gray-500">
            {baseExperience}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
