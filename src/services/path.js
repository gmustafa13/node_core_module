const path = require('path');

const baseName = path.basename('https://admin-dev.tesseract.in/module-details?id=JG_V3_OS_1');
console.log("baseName", baseName); // module-details?id=JG_V3_OS_1

const delimiter = 'https://admin-dev.tesseract.in/module-details?id=JG_V3_OS_1'.split(path.delimiter)
console.log('delimiter', delimiter); //[ 'https', '//admin-dev.tesseract.in/module-details?id=JG_V3_OS_1' ]

const dirName = path.dirname('https://admin-dev.tesseract.in/module-details?id=JG_V3_OS_1');
console.log("dirName", dirName); // https://admin-dev.tesseract.in

const extentionName = path.extname("abc.js")
console.log("extentionName", extentionName); //.js

const pathFormat = path.format({
    dir: 'https://admin-dev.tesseract.in',
    base: 'module-details?id=JG_V3_OS_1'
})
console.log("pathFormat", pathFormat); // https://admin-dev.tesseract.in/module-details?id=JG_V3_OS_1

const absulte = path.isAbsolute('https://admin-dev.tesseract.in/module-details?id=JG_V3_OS_1')
console.log('absulte', absulte); // false