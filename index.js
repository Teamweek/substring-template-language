var trim = require('trim');
var escape = require('escape-html');

var evaluateRegex = /\{\{([\s\S]+?)\}\}/g
  , trimRegex = /\{\{!([\s\S]+?)\}\}/;

module.exports = function (string) {
  return string.replace(evaluateRegex, function (match, value) {
    if (trimRegex.test(match)) {
      value = trim(value.slice(1));
    }
    value = escape(value);
    return value;
  });
}
