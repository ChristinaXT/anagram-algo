function anagrams(stringA, stringB) {

  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for(let char in aCharMap) {
    if(aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;

}

// Helper Function:
function buildCharMap(str) {
  const charMap = {};

  for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap
}

console.log(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard')); // False
console.log(anagrams('Whoa! Hi!', 'Hi! Whoa!')); // True
