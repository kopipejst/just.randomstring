#just.randomstring#

[![Build Status](https://travis-ci.org/kopipejst/just.randomstring.png)](https://travis-ci.org/kopipejst/just.randomstring)


JavaScript random string generator

##Installation##

###Node.js###

**npm package**

    npm install just.randomstring


**use in node.js**

    var randomstring = require('just.randomstring');

###Browser###

- download just.randomstring.js from [GitHub](https://github.com/kopipejst/just.randomstring)
- include on your page: `<script src="just.randomstring.js"></script>`


##Usage##

randomstring can be used in node.js or on client side in browser

###node.js

    var randomstring = randomstring();

###browser

    var randomstring = just.randomstring();
    
##Options##

###len
length of random string (default 20)

examples:

    var rs = randomstring(); // returns "ElZOtlOSLn49GeKLev2O"
    var rs = randomstring(5); // returns "Erf7g"


###type
type of characters that will be used for string generation (default numbers_uppercases_lowercases)

type can be **numbers**, **uppercases**, **lowercases** or combination of those separated with **_**

examples:

    var rs = randomstring(20, 'numbers'); // returns "78394850802905961074"
    var rs = randomstring(15, 'numbers_uppercases'); // returns "PXL3AE2USI7ZDQ2"



