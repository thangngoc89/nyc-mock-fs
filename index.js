var template = require("lodash.template")
var fs = require("fs");
var pify = require('pify');

function readFile(filePath) {
  return pify(fs.readFile)(filePath, 'utf8');
}

/**
 * Read file and return a string with given vars using lodash.template
 */
module.exports = function(filePath, templateVars) {
  return readFile(filePath)
    .then(function(content) {
      return template(content)(templateVars)
    });
}
