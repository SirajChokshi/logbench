import { component$, Slot } from "@builder.io/qwik";
import Header from "~/components/header/header";
import '../global.scss'

export const YEAR = new Date().getFullYear();

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <hr />
      <footer>&copy; Logbench {YEAR}</footer>
    </>
  );
});
