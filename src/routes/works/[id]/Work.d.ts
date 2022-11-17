import type { Links } from "src/global";

interface Work {
  title: string;
  description: string;
  links: Links[]
}

export { Work, Links }