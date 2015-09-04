var bruteContains = require('./bruteContains');
// IE < 8 throws on node.contains(textNode)
var supportsContainsTextNode = (function() {
  var node = document.createElement('div');
  var textNode = node.appendChild(document.createTextNode(''));
  var result = false;

  try {
    result = node.contains(textNode);
  } catch(e) {}

  return result;
})();

module.exports = function(element, needle) {
  if (!needle || !element || !needle.nodeType || !element.nodeType) {
    return false;
  }
  if (element.contains &&
    // IE < 8 throws on node.contains(textNode) so fall back to brute.
    // Falling back for other nodeTypes as well.
    (needle.nodeType === 1 || supportsContainsTextNode)) {
    return element.contains(needle);
  }

  if (element.compareDocumentPosition) {
    // Match contains behavior (node.contains(node) === true).
    // Needed for Firefox < 4.
    return element === needle ||
      !!(element.compareDocumentPosition(needle) & 16);
  }

  return bruteContains(element, needle);
};
