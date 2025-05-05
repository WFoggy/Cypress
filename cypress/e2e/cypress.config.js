const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/new_cypress-main/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    // другие настройки
  },
})
