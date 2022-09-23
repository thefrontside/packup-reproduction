import type { MainOptions } from "../types.ts";
import { Hono, serve } from "../deps.ts";

export async function main(options: MainOptions) {
  const app = new Hono();

  app.use("*", options.app);

  await serve(app.fetch, {
    port: options.port,
    onListen({ port }) {
      console.log(`Server started at http://localhost:${port}`);
    },
  });
}
