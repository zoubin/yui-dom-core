
module.exports = function(obj) {
  return !!(obj && obj.scrollTo && obj.document);
};
