var contains = require('./contains');

/**
 * Determines whether or not the HTMLElement is part of the document.
 * @param {HTMLElement} element The containing html element.
 * @param {HTMLElement} doc optional The document to check.
 * @return {Boolean} Whether or not the element is attached to the document.
 */
module.exports = function(element, doc) {
  var ret = false;
  var rootNode;

  if (element && element.nodeType) {
    doc = doc || element.ownerDocument;

    rootNode = doc.documentElement;

    // contains only works with HTML_ELEMENT
    if (rootNode && rootNode.contains && element.tagName) {
      ret = rootNode.contains(element);
    } else {
      ret = contains(rootNode, element);
    }
  }

  return ret;

};
