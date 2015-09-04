var getDoc = require('./getDoc');
var getp = require('getp');

module.exports = function(id, root) {
  root = root || document;
  var nodes = [];
  var ret = [];
  var i;
  var node;

  if (root.querySelectorAll) {
    return root.querySelectorAll('[id="' + id + '"]');
  }

  if (!root.all) {
    return [getDoc(root).getElementById(id)];
  }

  nodes = root.all(id);
  if (!nodes) {
    return ret;
  }

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
    for (i = 0; node = nodes[i++];) {
      if (node.id === id || getp(node, 'attributes.id.value') === id) {
        ret.push(node);
      }
    }
  }

  return ret;
};
