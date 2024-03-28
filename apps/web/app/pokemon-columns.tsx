"use client";

import { PokemonTypesOptions } from "@/lib/data";
import { TPokemon } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { DataTableColumnHeader } from "./_components/data-table/data-table-column-header";
import { TypeBadge } from "./_components/type-badge";

export const todoColumns: ColumnDef<TPokemon>[] = [
  {
    accessorKey: "sprite",
    header: "Sprite",
    cell: ({ row }) => {
      const pokemon = row.original;
      return (
        <Image
          src={pokemon.sprite}
          width={100}
          height={100}
          alt={`Front sprite of the pokemon ${pokemon.name}`}
        />
      );
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => {
      const name: string = row.getValue("name");
      return name.charAt(0).toUpperCase() + name.slice(1);
    },
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "types",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Types" />
    ),
    cell: ({ row }) => {
      const types: string[] = row.getValue("types");
      const typeOptions = PokemonTypesOptions;
      const typeSet = new Set(types);
      const typeLabels = typeOptions.filter((type) => typeSet.has(type.value));
      return (
        <div className="flex flex-row justify-center gap-1">
          {typeLabels.map((typeOption) => (
            <TypeBadge key={typeOption.value} typeOption={typeOption} />
          ))}
        </div>
      );
    },
    enableSorting: true,
    enableHiding: true,
    filterFn: (row, id: string, value: string[]) => {
      const types: string[] = row.getValue(id);
      const typesSet = new Set(value);
      const isMatch = types.some((type) => typesSet.has(type));
      return isMatch;
    },
  },
  // {
  // 	id: "actions",
  // 	cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
];
