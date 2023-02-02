type LogFn<TData> = (data: TData) => unknown;
export interface Logbench<TPayload> {
  log: LogFn<TPayload>;
  warn: LogFn<TPayload>;
  error: LogFn<TPayload>;
}

export interface LogbenchOptions<TPayload, KSerialized> {
  // overrides
  isProduction?: boolean;

  //options
  stringify?: boolean;

  // callbacks
  logFn?: LogFn<KSerialized>;
  warnFn?: LogFn<KSerialized>;
  errorFn?: LogFn<KSerialized>;
  serializeFn?: (log: TPayload) => KSerialized;
}
