/**
 * Returns the next character based on the current character and allowed
 * character ranges.
 * @param {number} code
 * @param {CharacterOptions}
 * @returns {string}
 */
module.exports = function(code, characters) {

  // 48 = 0, 57 = 9
  if (code == 57) {
    if (characters.uppercase)
      return 'A';
    else if (characters.lowercase)
      return 'a';
    else
      return '0';
  }
  // 65 = A, 90 = Z
  else if (code == 90) {
    if (characters.lowercase)
      return 'a';
    else if (characters.numbers)
      return '0';
    else
      return 'A';
  }
  // 97 = a, 122 = z
  else if (code == 122) {
    if (characters.numbers)
      return '0';
    else if (characters.uppercase)
      return 'A';
    else
      return 'a';
  }
  else {
    return String.fromCharCode(code + 1);
  }
  
}