var GraphemeBreaker = require('grapheme-breaker');
var assign = require('object-assign');

/**
 * Extracts a section of a string and returns a new string.
 */
function slice(str, beginSlice, endSlice) {
  return GraphemeBreaker.break(str)
    .slice(beginSlice, endSlice)
    .join('');
}

/**
 * Truncates string if it’s longer than the given maximum string length. The last characters of the truncated string are
 * replaced with the omission string which defaults to "…".
 * Similar to https://lodash.com/docs#trunc but doesn't have the separator option yet.
 */
function truncate(str, options) {
  options = assign({
    length: 24,
    omission: '...'
  }, options);

  if (GraphemeBreaker.countBreaks(str) <= options.length) {
    return str;
  }

  var length = options.length - options.omission.length;

  return slice(str, 0, length) + options.omission;
}

exports.slice = slice;
exports.truncate = truncate;
