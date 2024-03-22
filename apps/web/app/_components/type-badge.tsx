import { Badge } from "@repo/ui/components/ui/badge";
import { TOption, TPokemonType } from "../../lib/types";

export function TypeBadge({
  typeOption,
}: {
  typeOption: TOption<TPokemonType>;
}) {
  return (
    <Badge key={typeOption.value} variant={"outline"}>
      <div className="flex flex-row justify-center gap-1">
        {typeOption.icon && <typeOption.icon className="-ml-1 h-5 w-5 p-1" />}
        {typeOption.label}
      </div>
    </Badge>
  );
}
