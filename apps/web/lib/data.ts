import { BugIcon } from "./icons/icon-bug";
import { DarkIcon } from "./icons/icon-dark";
import { DragonIcon } from "./icons/icon-dragon";
import { ElectricIcon } from "./icons/icon-electric";
import { FairyIcon } from "./icons/icon-fairy";
import { FightingIcon } from "./icons/icon-fighting";
import { FireIcon } from "./icons/icon-fire";
import { FlyingIcon } from "./icons/icon-flying";
import { GhostIcon } from "./icons/icon-ghost";
import { GrassIcon } from "./icons/icon-grass";
import { GroundIcon } from "./icons/icon-ground";
import { IceIcon } from "./icons/icon-ice";
import { NormalIcon } from "./icons/icon-normal";
import { PoisonIcon } from "./icons/icon-poison";
import { PsychicIcon } from "./icons/icon-psychic";
import { RockIcon } from "./icons/icon-rock";
import { SteelIcon } from "./icons/icon-steel";
import { WaterIcon } from "./icons/icon-water";
import { TOption, TPokemonType } from "./types";

export const types = [
  "bug",
  "dark",
  "dragon",
  "electric",
  "fairy",
  "fighting",
  "fire",
  "flying",
  "ghost",
  "grass",
  "ground",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
] as const;

const bugOption: TOption<TPokemonType> = {
  label: "bug",
  value: "bug",
  icon: BugIcon,
};

const darkOption: TOption<TPokemonType> = {
  label: "dark",
  value: "dark",
  icon: DarkIcon,
};

const dragonOption: TOption<TPokemonType> = {
  label: "dragon",
  value: "dragon",
  icon: DragonIcon,
};

const electricOption: TOption<TPokemonType> = {
  label: "electric",
  value: "electric",
  icon: ElectricIcon,
};

const fairyOption: TOption<TPokemonType> = {
  label: "fairy",
  value: "fairy",
  icon: FairyIcon,
};

const fightingOption: TOption<TPokemonType> = {
  label: "fighting",
  value: "fighting",
  icon: FightingIcon,
};

const fireOption: TOption<TPokemonType> = {
  label: "fire",
  value: "fire",
  icon: FireIcon,
};

const flyingOption: TOption<TPokemonType> = {
  label: "flying",
  value: "flying",
  icon: FlyingIcon,
};

const ghostOption: TOption<TPokemonType> = {
  label: "ghost",
  value: "ghost",
  icon: GhostIcon,
};

const grassOption: TOption<TPokemonType> = {
  label: "grass",
  value: "grass",
  icon: GrassIcon,
};

const groundOption: TOption<TPokemonType> = {
  label: "ground",
  value: "ground",
  icon: GroundIcon,
};

const iceOption: TOption<TPokemonType> = {
  label: "ice",
  value: "ice",
  icon: IceIcon,
};

const normalOption: TOption<TPokemonType> = {
  label: "normal",
  value: "normal",
  icon: NormalIcon,
};

const poisonOption: TOption<TPokemonType> = {
  label: "poison",
  value: "poison",
  icon: PoisonIcon,
};

const psychicOption: TOption<TPokemonType> = {
  label: "psychic",
  value: "psychic",
  icon: PsychicIcon,
};

const rockOption: TOption<TPokemonType> = {
  label: "rock",
  value: "rock",
  icon: RockIcon,
};

const steelOption: TOption<TPokemonType> = {
  label: "steel",
  value: "steel",
  icon: SteelIcon,
};

const waterOption: TOption<TPokemonType> = {
  label: "water",
  value: "water",
  icon: WaterIcon,
};

export const PokemonTypesOptions = [
  bugOption,
  darkOption,
  dragonOption,
  electricOption,
  fairyOption,
  fightingOption,
  fireOption,
  flyingOption,
  ghostOption,
  grassOption,
  groundOption,
  iceOption,
  normalOption,
  poisonOption,
  psychicOption,
  rockOption,
  steelOption,
  waterOption,
];
