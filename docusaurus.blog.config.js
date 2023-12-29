const config = require('./docusaurus.config')

config.baseUrl = '/blog'

config.presets[0][1].blog.routeBasePath = '/'
config.presets[0][1].docs = false

module.exports = config
