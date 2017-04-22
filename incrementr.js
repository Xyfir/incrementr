const nextCharacter = require('./lib/next-character');

/**
 * @typedef {object} CharacterOptions
 * @property {boolean} numbers - If true, use numbers in id.
 * @property {boolean} uppercase - If true, use uppercase letters in id.
 * @property {boolean} lowercase - If true, user lowercase letters in id.
 */
/**
 * @typedef {object} Options
 * @property {CharacterOptions} characters
 */

/**
 * Increments an id string by one character.
 * @param {string} [id='0']
 * @param {Options} [opt]
 * @returns {string}
 */
module.exports = function(id = '0', opt = {}) {

  opt = Object.assign({
    characters: {
      numbers: true, uppercase: true, lowercase: true
    }
  }, opt);

  // Build id pattern based on opt.characters properties
  const regex = new RegExp(
    '^[' +
      (opt.characters.numbers ? '0-9' : '') +
      (opt.characters.uppercase ? 'A-Z' : '') +
      (opt.characters.lowercase ? 'a-z' : '') +
    ']{1,}$'
  );
  
  if (!regex.test(id))
    throw `Invalid identifier provided. Must match ${regex.toString()}.`;

  id = id.split('');

  // Increment the last character in string no matter what
  let increment = true;

  for (let i = id.length - 1; i >= 0; i--) {
    if (increment) {
      increment = false;

      id[i] = nextCharacter(id[i].charCodeAt(0), opt.characters);

      // Check if preceding character in string (next in loop) needs to be
      // incremented as well
      if (
        (id[i] == '0') ||
        (id[i] == 'A' && !opt.characters.numbers) ||
        (id[i] == 'a' && !opt.characters.numbers && !opt.characters.uppercase)
      ) {
        increment = true;

        // If the first character in the string needs to be incremented then
        // add a new character at the end of the string
        if (i == 0) {   
          increment = false;
          id.push(id[i]);
        }
      }
    }
    else {
      break;
    }
  }

  return id.join('');

}