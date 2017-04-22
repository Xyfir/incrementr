/*
 * Increments an id string by one character.
 * @param {string} [id]
 * @returns {string}
 */
module.exports = function(id = '0') {
  
  if (!/^[A-Z0-9]{1,}$/.test(id)) throw 'Invalid id provided';

  id = id.split('');

  // Increment the last character in string no matter what
  let increment = true;

  for (let i = id.length - 1; i >= 0; i--) {
    if (increment) {
      increment = false;

      id[i] = nextCharacter(id[i].charCodeAt(0));

      // If character is '0', it used to be 'Z', so the preceding character
      // needs to be incremented as well
      if (id[i] == '0') {
        increment = true;

        // If the first character in the string needs to be incremented then
        // add a new character at the end of the string, starting at '0'
        if (i == 0) {   
          increment = false;
          id.push('0');
        }
      }
    }
    else {
      break;
    }
  }

  return id.join('');

}

/*
 * Returns the next character. Goes from '9' -> 'A', 'Z' -> '0', or + 1.
 * @param {number} code
 * @returns {string}
 */
function nextCharacter(code) {
  // 48 = 0, 57 = 9
  // 65 = A, 90 = Z
  if (code == 57)
    return 'A';
  else
    return code < 90 ? String.fromCharCode(code + 1) : '0';
}