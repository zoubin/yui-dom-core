var getDoc = require('./getDoc');
var getp = require('getp');

module.exports = function(id, root) {
  root = root || document;

  if (root.querySelectorAll) {
    return root.querySelectorAll('[id="' + id + '"]');
  }

  if (!root.all) {
    return [getDoc(root).getElementById(id)];
  }

  var nodes = root.all(id);
  if (!nodes) {
    return [];
  }

  var ret = [];
  // root.all may return HTMLElement or HTMLCollection.
  // some elements are also HTMLCollection (FORM, SELECT).
  if (nodes.nodeName) {
    if (nodes.id === id) { // avoid false positive on name
      ret.push(nodes);
      nodes = []; // done, no need to filter
    } else { //  prep for filtering
      nodes = [nodes];
    }
  }

  if (nodes.length) {
    // filter out matches on node.name
    // and element.id as reference to element with id === 'id'
    for (var i = 0, node = nodes[i]; node; i++) {
      if (node.id === id || getp(node, 'attributes.id.value') === id) {
        ret.push(node);
      }
      node = nodes[i];
    }
  }

  return ret;
};
