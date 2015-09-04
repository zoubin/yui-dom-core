
/**
 * Brute force version of contains.
 * Used for browsers without contains support for non-HTMLElement Nodes (textNodes, etc).
 * @param {HTMLElement} element The containing html element.
 * @param {HTMLElement} needle The html element that may be contained.
 * @return {Boolean} Whether or not the element is or contains the needle.
 */
module.exports = function(element, needle) {
  while (needle) {
    if (element === needle) {
      return true;
    }
    needle = needle.parentNode;
  }
  return false;
};
