const config = require('./docusaurus.config')

config.baseUrl = '/docs'

config.presets[0][1].docs.routeBasePath = '/'
config.presets[0][1].blog = false

module.exports = config
