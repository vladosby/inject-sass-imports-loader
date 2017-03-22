"use strict";

var loaderUtils = require('loader-utils');

module.exports = function (source) {
    var query = loaderUtils.getOptions(this);
    var requiredImports = query.imports;

    var imports = '';
    for (var i = 0; i < requiredImports.length; i++) {
        imports += `@import '${requiredImports[i]}';\n`;
    }
    
    return source.includes('@import') ? `${imports}${source}` : `${imports}\n${source}`;
};
