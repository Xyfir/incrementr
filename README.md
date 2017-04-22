Increment identifier strings of pattern `/[A-Z0-9]{1,}/`.

Identifier strings are incremented in the following order: 0 through 9 to A through Z and back to 0. When all characters in the string are Z, all the characters are reset to 0 and another 0 is added to the end of the string. Currently no other characters are supported and there is no way to change the order of incrementation.

# Usage

```js
const increment = require('incrementr');

increment();
// '1'
increment('ABZ');
// 'AC0'
increment('AC0');
// 'AC1'
increment('TEST9');
// 'TESTA'
increment('HELLO');
// 'HELLP'
increment('ZZZ');
// '0000'
increment('aa');
// Throws error because identifier does not match pattern
```