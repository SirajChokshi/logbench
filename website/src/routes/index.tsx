import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>Documentation</h1>
      <h2>Usage</h2>
      <pre style="background: #ededed;">
        {`
        const logger = new Logbench({
          warnFn: (message) => console.log(
            %c\`\${message}\`,
            \`
             font-size: 18px;
             background: black;
             color: white; 
            \`
          )
        })`}
      </pre>
      <h2>API</h2>
    </>
  );
});

export const head: DocumentHead = {
  title: "Logbench",
};
