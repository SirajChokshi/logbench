import { component$, Slot } from "@builder.io/qwik";

export const YEAR = new Date().getFullYear();

export default component$(() => {
  return (
    <>
      <header>
        <h1>Logbench</h1>
      </header>
      <main>
        <Slot />
      </main>
      <footer>&copy; Logbench {YEAR}</footer>
    </>
  );
});
