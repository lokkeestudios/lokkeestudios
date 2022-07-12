/* imports */
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://lokkeestudios.com/",
  integrations: [tailwind({
    config: {
      path: "./tailwind.config.js"
    }
  })]
});
