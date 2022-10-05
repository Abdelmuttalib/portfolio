export type PokemonSpritesT = {
  back_default: string | null;
  back_female: null | string;
  back_shiny: string | null;
  back_shiny_female: null | string;
  front_default: string | null;
  front_female: null | string;
  front_shiny: string | null;
  front_shiny_female: null | string;
};

export type PokemonAbilityT = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type PokemonT = {
  name: string;
  url: string;
  baseExperience: number;
  sprites: PokemonSpritesT;
  weight: number;
  abilities: PokemonAbilityT[];
};
