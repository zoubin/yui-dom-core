var allById = require('./allById');

/**
 * Returns the HTMLElement with the given ID (Wrapper for document.getElementById).
 * @method byId
 * @param {String} id the id attribute
 * @param {Object} doc optional The document to search. Defaults to current document
 * @return {HTMLElement | null} The HTMLElement with the id, or null if none found.
 */
module.exports = function(id, doc) {
  // handle dupe IDs and IE name collision
  return allById(id, doc)[0] || null;
};
