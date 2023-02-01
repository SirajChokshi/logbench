import { LogbenchImpl } from "./logbench";
import { Logbench, LogbenchOptions } from "./types";

const NOOP = () => {};

const isProduction = () => process.env.NODE_ENV === "production";

export function logbench<TPayload, KSerialized>(
  options: LogbenchOptions<TPayload, KSerialized>
): Logbench<TPayload> {
  if (
    // if isProduction is not provided, default to checking NODE_ENV
    options.isProduction === undefined ? isProduction() : options.isProduction
  ) {
    // if in production, return a noop logger
    return {
      log: NOOP,
      warn: NOOP,
      error: NOOP,
    };
  }

  // otherwise, return a logger
  return new LogbenchImpl(options);
}
