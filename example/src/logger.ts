import logger from "logbench";

export const Logger = logger({
  stringify: true,
  errorFn: window.alert,
});
