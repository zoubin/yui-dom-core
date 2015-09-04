
module.exports = function(node) {
  var id;
  // HTMLElement returned from FORM when INPUT name === "id"
  // IE < 8: HTMLCollection returned when INPUT id === "id"
  // via both getAttribute and form.id
  if (node.id && !node.id.tagName && !node.id.item) {
    id = node.id;
  } else if (node.attributes && node.attributes.id) {
    id = node.attributes.id.value;
  }

  return id;
};
