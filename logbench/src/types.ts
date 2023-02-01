export interface Logbench<TPayload> {
  log: (log: TPayload) => unknown;
  warn: (log: TPayload) => unknown;
  error: (log: TPayload) => unknown;
}

export interface LogbenchOptions<TPayload, KSerialized> {
  // overrides
  isProduction?: boolean;

  //options
  stringify?: boolean;

  // callbacks
  logFn?: (log: KSerialized) => unknown;
  warnFn?: (log: KSerialized) => unknown;
  errorFn?: (log: KSerialized) => unknown;
  serializeFn?: (log: TPayload) => KSerialized;
}
