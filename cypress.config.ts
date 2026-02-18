import { defineConfig } from "cypress";

export default defineConfig({
  allowCypressEnv: false,

  e2e: {
    baseUrl: "https://para.testar.org",
    viewportWidth: 1280,
    viewportHeight: 800,
    video: true,
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    experimentalStudio: true,
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
  },
});
