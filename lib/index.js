"use strict";

const forEach = require("iterate-object")
    , noop = require("noop6")

/**
 * Redirect
 * Initializes the redirects.
 *
 * @name Redirect
 * @function
 * @param {Object} config The configuration object:
 *
 *     An key-value map: the key representing the old url
 *     and the value the new url (e.g. `{ "/old-foo": "/new-foo" }`).
 */
module.exports = config => {
    forEach(config, (newUrl, oldUrl) => {
        Bloggify.server.addPage(oldUrl, noop);
        Bloggify.server.hook("before", oldUrl, ctx => {
            ctx.redirect(newUrl)
        })
    })
}
