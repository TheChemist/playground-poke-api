import { LoadingIcon } from "../lib/icons/icon-loading";
import loading from "./loading.module.css";

export default function Loading() {
  return <LoadingIcon className={loading.Loading} width={50} />;
}
