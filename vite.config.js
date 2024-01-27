import inspect from "vite-plugin-inspect";
import { resolve } from "path";

export default {
  plugins: [inspect()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        events: resolve(__dirname, "./events/eve.html"),
      },
    },
  },
};
