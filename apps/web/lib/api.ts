import { TPageParam } from "../app/pokemon-page";
import { PageSchema, PokemonSchema } from "./schemas";

export const fetchPokemonPage = async ({ limit, offset }: TPageParam) => {
  return await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`,
  )
    .then((res) => res.json())
    .then((data) => PageSchema.parse(data))
    .catch(() => {
      throw new Error("Failed to fetch Page");
    });
};

export const fetchPokemon = async (pokemon: string) => {
  return await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => PokemonSchema.parse(data))
    .catch(() => {
      throw new Error(`Failed to fetch Pokemon: ${pokemon}`);
    });
};
