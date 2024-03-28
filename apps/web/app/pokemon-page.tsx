"use client";

import { fetchPokemonPage } from "@/lib/api";
import { Button } from "@repo/ui/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@repo/ui/components/ui/select";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState, useTransition } from "react";
import Loading from "./loading";
import PokemonOverview from "./pokemon-overview";

export type TPageParam = {
  currentPage?: number;
  maxPage?: number;
  limit: number;
  offset: number;
};

export default function PokemonPage({
  defaultPage,
}: {
  defaultPage: TPageParam;
}) {
  const [isPending, startTransition] = useTransition();
  const [page, setPage] = useState<TPageParam>(defaultPage);

  const { data } = useSuspenseQuery({
    queryKey: ["page", page],
    queryFn: () => fetchPokemonPage(page),
  });

  function handleNextPageClick() {
    // If this update suspends, don't hide the already displayed content
    startTransition(() => {
      setPage({ limit: page.limit, offset: page.offset + page.limit });
    });
  }

  function handlePreviousPageClick() {
    // If this update suspends, don't hide the already displayed content
    startTransition(() => {
      setPage({ limit: page.limit, offset: page.offset - page.limit });
    });
  }

  function handleLimitChange(limit: number) {
    // If this update suspends, don't hide the already displayed content
    startTransition(() => {
      setPage({ limit: limit, offset: page.offset });
    });
  }

  return (
    <div className="flex-1 flex-col space-y-3">
      <PageControls
        {...{
          page,
          total: data.count,
          handleLimitChange,
          handleNextPageClick,
          handlePreviousPageClick,
          isPending,
        }}
      />
      <PokemonOverview results={data.results} />
    </div>
  );
}

function PageControls({
  page,
  total,
  handleLimitChange,
  handleNextPageClick,
  handlePreviousPageClick,
  isPending,
}: {
  page: TPageParam;
  total: number;
  // eslint-disable-next-line no-unused-vars
  handleLimitChange: (limit: number) => void;
  handleNextPageClick: () => void;
  handlePreviousPageClick: () => void;
  isPending: boolean;
}) {
  return (
    <div className="flex justify-between">
      <div className="flex items-center space-x-2">
        <Button
          size={"sm"}
          variant={"outline"}
          disabled={isPending}
          onClick={() => handlePreviousPageClick()}
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>
        <div className="flex w-40 justify-center">
          {isPending ? (
            <Loading />
          ) : (
            <p className="text-sm font-medium">
              Page {Math.floor(page.offset / page.limit) + 1} of{" "}
              {Math.floor(total / page.limit) + 1}
            </p>
          )}
        </div>
        <Button
          size={"sm"}
          variant={"outline"}
          disabled={isPending}
          onClick={() => handleNextPageClick()}
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <p className="text-sm font-medium">Rows per page</p>
        <Select
          value={`${page.limit}`}
          onValueChange={(value) => {
            return handleLimitChange(Number(value));
          }}
        >
          <SelectTrigger className="h-8 w-[70px]">
            <SelectValue placeholder={page.limit} />
          </SelectTrigger>
          <SelectContent side="top">
            {[1, 3, 5, 10, 100].map((limit) => (
              <SelectItem key={limit} value={`${limit}`}>
                {limit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
