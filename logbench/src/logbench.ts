import { LogbenchOptions, Logbench } from "./types";

export class LogbenchImpl<TPayload, KSerialized> implements Logbench<TPayload> {
  logFn: (log: KSerialized) => unknown;
  warnFn: (log: KSerialized) => unknown;
  errorFn: (log: KSerialized) => unknown;
  _serialize: (log: TPayload) => KSerialized;

  constructor({
    // provide default callbacks
    logFn = console.log,
    warnFn = console.warn,
    errorFn = console.error,
    serializeFn,
    ...options
  }: LogbenchOptions<TPayload, KSerialized>) {
    this.logFn = logFn;
    this.warnFn = warnFn;
    this.errorFn = errorFn;

    // use an identity function as the default serializer
    this._serialize = (log) => log as unknown as KSerialized;

    if (options.stringify) {
      // deliberately using JSON.stringify as unknown as (log: TPayload) => KSerialized
      this._serialize = JSON.stringify as unknown as (
        log: TPayload
      ) => KSerialized;
    }
    if (serializeFn) {
      // use user provided serialize function
      this._serialize = serializeFn;
    }
  }

  log(payload: TPayload) {
    const message = this._serialize(payload);
    this.logFn(message);
  }

  warn(payload: TPayload) {
    const message = this._serialize(payload);
    this.warnFn(message);
  }

  error(payload: TPayload) {
    const message = this._serialize(payload);
    this.errorFn(message);
  }
}
