"use client";

import { Button } from "@repo/ui/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@repo/ui/components/ui/dropdown-menu";
import { type Row } from "@tanstack/react-table";
import { MoreHorizontalIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PokemonSchema } from "../../../lib/schemas";

type DataTableRowActionsProps<TData> = {
  row: Row<TData>;
};

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const pathname = usePathname();
  const pokemon = PokemonSchema.parse(row.original);
  const href = `${pathname}/${pokemon.name}`;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          size={"sm"}
          variant="ghost"
          className="flex data-[state=open]:bg-muted"
        >
          <MoreHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <Link href={href}>
          <DropdownMenuItem>Edit</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
