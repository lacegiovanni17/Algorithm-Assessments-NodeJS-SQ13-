//Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise. The string
//may contain any of the 128 ASCII characters. SPECIFICATION. Parameters - str: String - The string that may or may not contain all
//unique characters. Return Value. Boolean - True if all characters inn the string are unique.
//Examples:
//   str                         Return Value
//   "abcdefg"                     true
//  "abbcdefg"                     false

//Solution 1:

const hasUniqueChars = (s) => {
  let tempAr = [];
  let alreadyInTempArr = [];
  let spiltArr = s.split(" ");
  for (let i = 0; i < spiltArr.length; i++) {
    if (!alreadyInTempArr.includes(splitArr[i])) {
      alreadyInTempArr.push(splitArr[i]);
    } else {
      alreadyInTempArr.push(splitArr[i]);
    }
  }
  if (alreadyInTempArr.length > 0) {
    return false;
  }
  return true;
};

//Solution 2:
const hasUniqueCharss = (s) => {
  return newSet(s).size === s.length;
};
