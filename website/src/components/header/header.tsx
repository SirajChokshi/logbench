import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./header.scss?inline";
import { Logo } from "../logo/logo";

export default component$(() => {
  useStyles$(styles);

  return (
    <header>
      <Logo />
      <h1>Logbench</h1>
      <p>A tiny tool for warning developers.</p>
    </header>
  );
});
