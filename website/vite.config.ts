import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

import rehypePrettyCode from 'rehype-pretty-code';

import Gruvbox from './src/assets/gruvbox.json'

export default defineConfig(() => {
  return {
    plugins: [qwikCity({
      mdxPlugins: {
        rehypeSyntaxHighlight: false,
        remarkGfm: true,
        rehypeAutolinkHeadings: true,
      },
      mdx: {
        rehypePlugins: [[
          // @ts-ignore
          rehypePrettyCode, {
          theme: Gruvbox,
          keepBackground: false,
        }]]
      }
    }), qwikVite(), tsconfigPaths()],
    dev: {
      headers: {
        "Cache-Control": "public, max-age=0",
      },
    },
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
  };
});
