const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const usedNames = {};
  return names.map(name => {
    if (usedNames[name] === undefined) {
      usedNames[name] = 1;
      return name;
    }
    const n = usedNames[name];
    const newName = `${name}(${n})`;
    usedNames[name] += 1;
    usedNames[newName] = 1;
    return newName;
  });
}

module.exports = {
  renameFiles
};
