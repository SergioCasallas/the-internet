import { defineConfig } from "cypress";
import dotenv from "dotenv";
import fs from "fs"; // Importa 'fs' para verificar la existencia de archivos

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      const environment = config.env.ENVIRONMENT || "development";
      const envFile = `.env.${environment}`;
      if (fs.existsSync(envFile)) {
        dotenv.config({ path: envFile });
      } else {
        dotenv.config();
      }
      config.env = {
        ...process.env,
        ...config.env,
      };

      return config;
    },
  },
});
