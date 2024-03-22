import { z } from "zod";

export const PageSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
  results: z.array(
    z.object({
      name: z.string(),
      url: z.string(),
    }),
  ),
});

const PokemonMovesSchema = z.array(
  z
    .object({
      move: z.object({
        name: z.string(),
        url: z.string(),
      }),
    })
    .transform((val) => val.move.name),
);

const PokemonTypesSchema = z.array(
  z
    .object({
      slot: z.number(),
      type: z.object({
        name: z.string(),
      }),
    })
    .transform((val) => val.type.name),
);

export const PokemonSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    types: PokemonTypesSchema,
    moves: PokemonMovesSchema,
    sprites: z.object({
      front_default: z.string(),
    }),
  })
  .transform((data) => ({
    id: data.id,
    name: data.name,
    types: data.types,
    moves: data.moves,
    sprite: data.sprites.front_default,
  }));
