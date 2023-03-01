import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";

export const YEAR = new Date().getFullYear();

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <footer>&copy; Logbench {YEAR}</footer>
    </>
  );
});
