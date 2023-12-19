const { defineConfig } = require('cypress')

const cypressSplit = require('cypress-split')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      // IMPORTANT: return the config object
      return config
    }
  },
})
