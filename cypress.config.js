const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-qase-reporter/dist')(on, config);// implement node event listeners here
    },
    "supportFile": false
  },
  reporter: 'cypress-qase-reporter',
  reporterOptions: {
    mode: "testops",
    screenshotFolder: 'screenshots',
    videoFolder: 'videos',
    logging: true,
    sendScreenshot: true,
    runComplete: true
  },
});
