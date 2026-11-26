import { env } from "node:process";

export function hasEnvDebug(): boolean {
  return env.DEBUG !== undefined;
}
