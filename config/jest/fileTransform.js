// fileTransformer.js
const path = require('path');

module.exports = {
    getCacheKey() {
        return 'fileTransform';
    },    
  process(sourceText, sourcePath, options) {
    return {
        code: `module.exports = ${JSON.stringify(path.basename(sourcePath))};`,
      };
  },
};