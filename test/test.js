// index.test.js
const ASSERT = require("assert")
const PIXELIZER = require("../lib/index");

describe("Check if all characters, numbers and punctiuation is there", () => {
  for (let size of PIXELIZER.sizes) {
    let allChars = Object.assign([], PIXELIZER.allChars);
    let currentPIXELS = PIXELIZER[size];
    it(`Test ${size} characters, numbers and punctiuation`, () => {

      let missingChars = allChars.reduce((missing, elem) => {
        if(typeof currentPIXELS[elem] == 'undefined') {
          missing.push(elem)
        }
        return missing;
      }, []);

      ASSERT.equal(missingChars.length, 0, `Missing characters ${missingChars.join(',')}  in size ${size}`);

    });

    it(`Test ${size} array length`, () => {
      let currPixelArray = Object.keys(currentPIXELS);
      ASSERT.equal(currPixelArray.length, allChars.length, `Length of size ${size} should be ${allChars.length} but is ${currPixelArray.length}`);
    });

    it(`Test ${size} rows`, () => {
      let currPixelArray = Object.keys(currentPIXELS);
      let mustHaveColums = size.split("x")[0];
      let mustHaveRows = size.split("x")[1];

      let charsWithWrongCols = allChars.reduce(function(missing, elem) {
        if(typeof currentPIXELS[elem] == 'undefined') {
          missing.push(`${elem} is missing`);
        } else if(currentPIXELS[elem].length != mustHaveRows) {
          missing.push(`'${elem}' has ${currentPIXELS[elem].length} rows instead of ${mustHaveRows}`);
        }

        return missing;
      }, []);

      ASSERT.equal(charsWithWrongCols.length, 0, `Characters with errors: ${charsWithWrongCols.join(',')}  in size ${size}`);

    });



    it(`Test ${size} cols`, () => {
      let currPixelArray = Object.keys(currentPIXELS);
      let mustHaveColums = size.split("x")[0];
      let mustHaveRows = size.split("x")[1];

      let charsWithWrongCols = allChars.reduce(function(missing, elem) {
        if(typeof currentPIXELS[elem] == 'undefined') {
          missing.push(`${elem} is missing`);
        } else {
          for(let z=0; z<currentPIXELS[elem].length; z++) {
            let row = currentPIXELS[elem][z];
            if(row.length != mustHaveColums) {
              missing.push(`'${elem}' has wrong row (index=${z}): has ${row.length} pixels but should be ${mustHaveColums}`);
            }
          }
        }

        return missing;
      }, []);

      ASSERT.equal(charsWithWrongCols.length, 0, `Characters with errors: ${charsWithWrongCols.join(',')}  in size ${size}`);

    });
  }
});
