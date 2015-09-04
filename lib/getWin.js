var getDoc = require('./getDoc');

/**
 * returns the appropriate window.
 * @private
 * @param {HTMLElement} element optional Target element.
 * @return {Object} The window for the given element or the default window.
 */
module.exports = function(element, w) {
  var doc = getDoc(element);
  return doc['defaultView'] || doc['parentWindow'] || w || window;
};
