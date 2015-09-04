
/**
 * Searches the element by the given axis for the first matching element.
 * @param {HTMLElement} element The html element.
 * @param {String} axis The axis to search (parentNode, nextSibling, previousSibling).
 * @param {Function} [fn] An optional boolean test to apply.
 * @param {Boolean} [all] Whether text nodes as well as element nodes should be returned, or
 * just element nodes will be returned(default)
 * The optional function is passed the current HTMLElement being tested as its only argument.
 * If no function is given, the first element is returned.
 * @return {HTMLElement | null} The matching element or null if none found.
 */
module.exports = function(element, axis, fn, all, stopAt) {
  while (element && (element = element[axis])) { // NOTE: assignment
    if ( (all || element['tagName']) && (!fn || fn(element)) ) {
      return element;
    }

    if (stopAt && stopAt(element)) {
      return null;
    }
  }
  return null;
};
