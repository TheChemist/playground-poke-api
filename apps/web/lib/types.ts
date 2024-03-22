import { z } from "zod";
import { types } from "./data";
import { PageSchema, PokemonSchema } from "./schemas";

export type TOption<T> = {
  label: string;
  value: T;
  icon?: React.ComponentType<{ className?: string }>;
};

export type TPage = z.infer<typeof PageSchema>;

export type TPokemon = z.infer<typeof PokemonSchema>;

export type TPokemonType = (typeof types)[number];
