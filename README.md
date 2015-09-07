# Substring Template Language
A tiny template language for escaping substrings of longer strings

## Usage

```javascript
var subTemplate = require('substring-template-language');

// Escaping
subTemplate('Lorem <br> ipsum dolor {{<br>}} sit amet'); // 'Lorem <br> ipsum dolor &lt;br&gt; sit amet'

// Escaping and trimming
subTemplate('Lorem <br> ipsum dolor {{!  <br>  }} sit amet'); // 'Lorem <br> ipsum dolor &lt;br&gt; sit amet'
```
