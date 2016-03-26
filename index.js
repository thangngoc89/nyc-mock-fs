var template = require("lodash.template")
var readFile = require("fs-promise").readFile
/**
 * Read file and return a string with given vars using lodash.template
 */
module.exports = function(filePath, templateVars) {
  return readFile(filePath, { encode: "utf-8" })
    .then(function(content) {
      template(content)(templateVars)
    })
}
