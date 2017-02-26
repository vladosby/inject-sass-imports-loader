"use strict";

const loaderUtils = require('loader-utils');

module.exports = function (source, map) {
    if (this.cacheable) {
        this.cacheable();
    }

    const query = loaderUtils.getOptions(this);
    const requiredImports = query.imports;

    let imports = '';
    for (let i = 0; i < requiredImports.length; i++) {
        imports += `@import '${requiredImports[i]}';\n`;
    }
    
    return source.includes('@import') ? `${imports}${source}` : `${imports}\n${source}`;

};
