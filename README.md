# Substring Template Language
A tiny template language for escaping substrings of longer strings.

## Yet another template language?

There are no variables in the Substring template language. It is a tiny utility for escaping and trimming substrings.

## Usage

```javascript
var subTemplate = require('substring-template-language');

// Escaping
subTemplate('Lorem <br> ipsum dolor {{<br>}} sit amet'); // 'Lorem <br> ipsum dolor &lt;br&gt; sit amet'

// Escaping and trimming
subTemplate('Lorem <br> ipsum dolor {{!  <br>  }} sit amet'); // 'Lorem <br> ipsum dolor &lt;br&gt; sit amet'
```
