import { serveStatic } from "./deps.ts";

export interface MainOptions {
  port: number;
  app: ReturnType<typeof serveStatic>;
}
