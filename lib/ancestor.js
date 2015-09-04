var elementByAxis = require('./elementByAxis');

/*
 * Finds the ancestor of the element.
 * @param {HTMLElement} element The html element.
 * @param {Function} fn optional An optional boolean test to apply.
 * The optional function is passed the current DOM node being tested as its only argument.
 * If no function is given, the parentNode is returned.
 * @param {Boolean} testSelf optional Whether or not to include the element in the scan
 * @return {HTMLElement | null} The matching DOM node or null if none found.
 */
module.exports = function(element, fn, testSelf, stopFn) {
  var ret = null;
  if (testSelf) {
    ret = (!fn || fn(element)) ? element : null;
  }
  return ret || elementByAxis(element, 'parentNode', fn, null, stopFn);
};
