import { defineConfig } from "vite";

export default defineConfig({

  root: "src",

  base: "/repo-name/",

  publicDir: "../public",

  server: {
    port: 1234
  },

  build: {
    outDir: "../dist"
  },

  test: {

    environment: "happy-dom",

    globals: true,

    include: [
      "**/*.test.js"
    ]

  }

});