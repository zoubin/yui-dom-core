var ancestor = require('./ancestor');

/*
 * Finds the ancestors of the element.
 * @param {HTMLElement} element The html element.
 * @param {Function} fn optional An optional boolean test to apply.
 * The optional function is passed the current DOM node being tested as its only argument.
 * If no function is given, all ancestors are returned.
 * @param {Boolean} testSelf optional Whether or not to include the element in the scan
 * @return {Array} An array containing all matching DOM nodes.
 */
module.exports = function(element, fn, testSelf, stopFn) {
  var current = element;
  var ret = [];

  while ((current = ancestor(current, fn, testSelf, stopFn))) {
    testSelf = false;
    if (current) {
      ret.unshift(current);

      if (stopFn && stopFn(current)) {
        return ret;
      }
    }
  }

  return ret;
};
