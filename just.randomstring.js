

var just = just || {};
//NUM, ALPHAU, ALPHAL, ALPHAUNUM, ALPHALNUM, ALPHANUM, ALPHA
just.randomstring = function (len, type) {

    len = len || 20;
    type = type || 'numbers_alphauppercase_alphalowercase';

    var strings = {
            numbers: '0123456789',
            alphauppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            alphalowercase: 'abcdefghiklmnopqrstuvwxyz'
        },
        choise = '',
        ret = '',
        types = type.split('_'),
        i;

    for (i = 0; i < types.length; i++) {
        if (strings[types[i]]) {
            choise += strings[types[i]];
        }
    }

    if (!choise) {
        choise = strings.numbers + strings.alphalowercase + strings.alphauppercase;
    }

    for (i = 0; i < len; i++) {
        ret +=  choise[Math.floor(Math.random() * choise.length)];
    }

    return ret;

};

var str = just.randomstring(20);
console.log(str);


if (typeof module !== 'undefined' && module.exports) {
    module.exports = just.randomstring;
}