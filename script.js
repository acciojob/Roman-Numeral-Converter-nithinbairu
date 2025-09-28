function convertToRoman(num) {
  const obj = {
    0: ["M", 1000],
    1: ["CM", 900],
    2: ["D", 500],
    3: ["CD", 400],
    4: ["C", 100],
    5: ["XC", 90],
    6: ["L", 50],
    7: ["XL", 40],
    8: ["X", 10],
    9: ["IX", 9],
    10: ["V", 5],
    11: ["IV", 4],
    12: ["I", 1]
  };

  let res = "";
  let keys = Object.keys(obj); // ["0","1","2",...,"12"]

  for (let i = 0; i < keys.length; i++) {
    let [roman, value] = obj[keys[i]];
    while (num >= value) {
      res += roman;
      num -= value;
    }
  }

  return res;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(1994));




// do not edit below this line
module.exports = convertToRoman
