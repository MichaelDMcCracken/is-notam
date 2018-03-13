# is-notam

Determine if a string constitutes a valid NOTAM.

## Installation

```
npm install is-notam
```

## Usage

```javascript
var isNotam = require('is-notam')

isNotam('!ATL foo')
=> false

isNotam('!ATL 03/080 ATL RWY 10/28 CLSD 1803120330-1803120700')
=> true
```
