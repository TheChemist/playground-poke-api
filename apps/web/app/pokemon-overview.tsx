"use client";

import { useSuspenseQueries } from "@tanstack/react-query";
import { fetchPokemon } from "../lib/api";
import { DataTable } from "./_components/data-table/data-table";
import { todoColumns } from "./pokemon-columns";

export default function PokemonOverview({
  results,
}: {
  results: { name: string; url: string }[];
}) {
  const pokemon = useSuspenseQueries({
    queries: results.map((result) => ({
      queryKey: ["pokemon", result.name],
      queryFn: () => fetchPokemon(result.name),
    })),
    combine: (data) => {
      return {
        data: data.map((value) => value.data),
        pending: data.map((value) => value.isFetching),
      };
    },
  });

  return <DataTable columns={todoColumns} data={pokemon.data} />;
}
