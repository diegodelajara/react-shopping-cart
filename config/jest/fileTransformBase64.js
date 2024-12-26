// fileTransformer.js
const path = require('path');
const fs = require("fs");
const crypto = require("crypto");
const THIS_FILE = fs.readFileSync(__filename);

const base64 = (filename) => {
    /*let extname = path.extname(filename).substr(1);
    extname = extname || "png";
  
    if (extname === "svg") extname = "svg+xml";
  
    return "data:image/" + extname + ";base64," + data.toString("base64");*/
    return "data:image/png;base64,0000";
  };

module.exports = {
    getCacheKey: (fileData, filename, configString) => {
        return 'fileTransformBase64';
      },   
  process(sourceText, sourcePath, options) {
    const data = base64(sourcePath);
    return `module.exports = ${JSON.stringify(data)};`;    
  },
};