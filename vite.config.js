import path from "path";

export default {
  root: path.join(__dirname, "src"),
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src", "*.html"),
    },
  },
};
