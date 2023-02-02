import logger from "logbench";

export const Logger = logger({
  stringify: true,
  logFn: console.log,
  warnFn: console.warn,
  errorFn: window.alert,
});
