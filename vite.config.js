import path from "path";

export default {
  root: path.join(__dirname, "src"),
  build: {
    outDir: path.join(__dirname, "dist"),
    rollupOptions: {
      input: {
        main: "index.html",
        imprint: "imprint/index.html",
      },
    },
  },
};
