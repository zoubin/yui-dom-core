
module.exports = function(node, fn) {
  var nodes = [];
  var sibling = node;

  while ((sibling = sibling['previousSibling'])) {
    if (sibling['tagName'] && (!fn || fn(sibling))) {
      nodes.unshift(sibling);
    }
  }

  sibling = node;
  while ((sibling = sibling['nextSibling'])) {
    if (sibling['tagName'] && (!fn || fn(sibling))) {
      nodes.push(sibling);
    }
  }

  return nodes;
};
