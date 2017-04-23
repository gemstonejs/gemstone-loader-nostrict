/*
**  GemstoneJS -- Gemstone JavaScript Technology Stack
**  Copyright (c) 2016-2017 Gemstone Project <http://gemstonejs.com>
**  Licensed under Apache License 2.0 <https://spdx.org/licenses/Apache-2.0>
*/

const loaderUtils = require("loader-utils")

/*  the exported Webpack loader function  */
module.exports = function (content) {
    /*  determine Webpack loader query parameters  */
    const options = Object.assign({}, {
    }, loaderUtils.getOptions(this), this.resourceQuery ? loaderUtils.parseQuery(this.resourceQuery) : null)

    /*  indicate to Webpack that our results are
        fully deterministic and can be cached  */
    this.cacheable(true)

    /*  remove strictness directives  */
    content = content
        .replace(/"use strict";?/g, "")
        .replace(/'use strict';?/g, "")

    /*  return the resulting content  */
    return content
}

