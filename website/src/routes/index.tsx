import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Logbench</h1>
      <p>A tiny tool for warning developers.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Logbench",
};
