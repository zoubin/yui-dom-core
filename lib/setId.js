
module.exports = function(node, id) {
  if (node.setAttribute) {
    node.setAttribute('id', id);
  } else {
    node.id = id;
  }
};
