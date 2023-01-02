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

const absulte = path.isAbsolute('https://admin-dev.tesseract.in/module-details?id=JG_V3_OS_1') // to check path is absolute or not
console.log('absulte', absulte); // false

/**
 * path.join() is used for to go any directory
 */

const joinPath = path.join(__dirname, '/abc');
console.log("joinPath", joinPath); ///home/gulam/gmustafa/node-practice/src/services/abc

/**
 * path.normalize() will normalize  ..  or ./ in dir
 */
const normalizedPath = path.normalize("/foo/bar/../../abc")
console.log("normalizedPath  ", normalizedPath);

/**
 * path.parse()
 * path.parse() method returns an object whose properties represent significant elements of the path.
 * Trailing directory separators are ignored
 */
const parsePath = path.parse('/home/user/dir/file.txt');
console.log("parse path  ", parsePath);
/**
 * o/p
 * 
 * {
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
 */

/**
 * path.resolve()
 * method resolves a sequence of paths or path segments into an absolute path.
*/

const resolvedPath = path.resolve('foo/bar', './baz');
console.log("resolvedPath ", resolvedPath); // /home/gulam/gmustafa/node-practice/src/services/foo/bar/baz