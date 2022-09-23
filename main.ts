import { main } from "./server/index.ts";
import { parse, serveStatic } from "./deps.ts";

import type { MainOptions } from "./types.ts";

let args = parse(Deno.args, {
  default: {
    "port": 8000,
  },
  alias: {
    "p": "port",
  },
});

// deno-lint-ignore require-await
async function parseOptions(
  args: ReturnType<typeof parse>,
): Promise<MainOptions> {
  let app = serveStatic({ root: args["app-path"] });

  return {
    port: Number(args.port),
    app,
  };
}

let options = await parseOptions(args);

await main(options);
