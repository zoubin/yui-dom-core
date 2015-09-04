
module.exports = function(node) {
  while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
};

