import Link from "next/link";
import { PokemonIcon } from "../../lib/icons/icon-pokemon";
import { ModeToggle } from "../_components/mode-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex flex-row h-14 items-center justify-between">
        <Link href="/">
          <PokemonIcon width={100} height={100} />
        </Link>

        <ModeToggle />
      </div>
    </header>
  );
}
