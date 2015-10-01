// Dependencies
var IterateObject = require("iterate-object");

/**
 * Redirect
 * Initializes the redirects.
 *
 * @name Redirect
 * @function
 * @param {Object} config The configuration object:
 *
 *  - `redirects` (Object) An key-value map: the key representing the old url
 *     and the value the new url (e.g. `{ "/old-foo": "/new-foo" }`).
 */
module.exports = function Redirect (config) {
    if (!config) {
        return Bloggify.log("The redirect plugin needs a configuration. Check the docs.", "warn");
    }
    IterateObject(config.redirects, function (newUrl, oldUrl) {
        Bloggify.server.onrequest.add(oldUrl, function (lien) {
            lien.redirect(newUrl);
            return false;
        });
    });
};
