/* imports */
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://lokkeestudios.com/",
  integrations: [
    tailwind({
      config: { path: "./tailwind.config.js" },
    }),
  ],
});
