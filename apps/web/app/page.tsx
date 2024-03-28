import { fetchPokemonPage } from "@/lib/api";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import { Suspense } from "react";
import Loading from "./loading";
import PokemonPage from "./pokemon-page";

const defaultPage = { limit: 5, offset: 0 };

export default async function Home() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["page", defaultPage],
    queryFn: () => fetchPokemonPage(defaultPage),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<Loading />}>
        <PokemonPage defaultPage={defaultPage} />
      </Suspense>
    </HydrationBoundary>
  );
}
