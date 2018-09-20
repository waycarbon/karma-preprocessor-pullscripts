var process = require('./parse');

var pullScripts = function (loggerFactory, config) {
    var logger = loggerFactory.create('preprocessor:pullscripts');
    config = typeof config === 'object' ? config : {};

    return function (content, file, done) {
        file.path = file.path + ".js";      // Append .js since Karma includes HTML as links per default
        process(config, content, logger, done);
    };
};

pullScripts.$inject = [ 'logger', 'config.pullscripts' ];

module.exports = {
    'preprocessor:pullscripts': [ 'factory', pullScripts ]
};
