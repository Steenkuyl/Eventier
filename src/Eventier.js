/*
 * Eventier
 * https://github.com/nbubna/Eventier
 *
 * Copyright (c) 2013 ESHA Research
 * Licensed under the MIT license.
 */
(function(window) {
    "use strict";

    // internal API
    var _ = {
        version: "<%= pkg.version %>",
        internal: 'property'
    };

    // external API
    var Eventier = {
        _: _,// comment to hide internal API
        external: function() {
            return 'Eventier v'+_.version;
        }
    };

    // export Eventier
    if (typeof define === 'function' && define.amd) {
        define(function(){ return Eventier; });
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = Eventier;
    } else {
        window.Eventier = Eventier;
    }

}(window));
