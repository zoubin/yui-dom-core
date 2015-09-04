
module.exports = function(node, fn) {
  var nodes = [];

  var sibling = node.previousSibling;
  while (sibling) {
    if (sibling.tagName && (!fn || fn(sibling))) {
      nodes.unshift(sibling);
    }
    sibling = sibling.previousSibling;
  }

  sibling = node.nextSibling;
  while (sibling) {
    if (sibling.tagName && (!fn || fn(sibling))) {
      nodes.push(sibling);
    }
    sibling = sibling.nextSibling;
  }

  return nodes;
};
