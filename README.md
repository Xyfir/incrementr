Increment identifier strings.

If all character ranges are allowed, identifier strings are incremented in the following order: `0` through `9` to `A` through `Z` to `a` through `z` and back to `0`. When all characters in the string are `z`, all the characters are reset to `0` and another `0` is added to the end of the string. If a certain character range is not allowed, then that range is skipped. For example `Z` will go to `0` if lowercase letters are not allowed and `z` will go to `a` if only lowercase letters are allowed.

# Usage

```js
const increment = require('incrementr');

increment();
// '1'
increment('ABZ');
// 'ABa'
increment('ABz');
// 'AC0'
increment('TEST9');
// 'TESTA'
increment('HELLO');
// 'HELLP'
increment('zzz');
// '0000'

increment('9', { characters: { numbers: true, lowercase: true } });
// 'a'
increment('Z', { characters: { uppercase: true } });
// 'AA'

increment('!');
increment('ABC9', { characters: { lowercase: true } });
increment('a99', { characters: { uppercase: true, numbers: true } });
// All throw errors because identifier does not match pattern
```