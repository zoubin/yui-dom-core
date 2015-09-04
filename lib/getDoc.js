
/**
 * returns the appropriate document.
 * @param {HTMLElement} element optional Target element.
 * @return {Object} The document for the given element or the default document.
 */
module.exports = function(element, doc) {
  doc = doc || document;
  if (element) {
    doc = (element['nodeType'] === 9)
      ? element // element === document
      : element['ownerDocument'] || // element === DOM node
        element.document || // element === window
        doc; // default
  }

  return doc;
};
