/**
 * To use:
 * Change filePath in this file
 * 
 * Run the following in console:
 * $ npm i --save colorthief
 * $ node Color.js
*/

const fs = require('fs');
const ColorThief = require('colorthief');

const filePath = 'pics'

function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

fs.readdirSync(filePath).forEach( file =>
    {
        ColorThief.getPalette(filePath + '/' + file, 10, 1)
            .then(palette => {
                    palette.forEach( (rgb, index, arr) => {
                        arr[index] = rgbToHex(rgb[0], rgb[1], rgb[2])
                    })
                    console.log("file name: %s, colors: %O", file, palette)
                })
            .catch(err => { console.log(err) });
    }
);