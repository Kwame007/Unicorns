import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({

//Consider using port :3030
  plugins: [react()],
  server: {
    port: 3001,
  },
});

/*
export default {
    //es : [ '.js','.ts','.jsx','.tsx','.json']
}
*/
