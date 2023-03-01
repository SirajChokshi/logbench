import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./header.scss?inline";

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <h1>Logbench</h1>
      <p>A tiny tool for warning developers.</p>
    </header>
  );
});
