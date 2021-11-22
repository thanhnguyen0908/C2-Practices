const fs = require('fs');

let createImgIndex = fs.createWriteStream('input.js'),
  importText = '',
  constant = '';

let imagesList = fs
  .readdirSync('./src/asset/images', {withFileTypes: true})
  .filter(item => !item.isDirectory())
  .map(item => item.name);

let imageType = /(\.jpg|\.jpeg|\.png|\.svg)$/i;

imagesList.forEach(function (image) {
  if (image.match(imageType)) {
    let removeSpecial = image.replace(/[^a-zA-Z ]/g, ' ');
    let addUpper = removeSpecial
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1));
    let joinText = addUpper.join('');
    importText += `import ${joinText.substring(
      0,
      joinText.length - 3,
    )} from '/images/${image}';\n`;
    constant += ` ${joinText.substring(0, joinText.length - 3)},\n`;
  }
});

console.log('importText: ', importText);
console.log('constant: ', constant);

createImgIndex.write(importText);
createImgIndex.write(`\nconst images = { ${constant} }\n`);
createImgIndex.write('\nexport default images');
createImgIndex.end();
