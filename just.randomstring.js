/**
 * just namespace
 * @type {[type]}
 */
var just = just || {};

/**
 * Random string generator
 *
 * can be used on node.js or client side
 *
 * type can be numbers, uppercases, lowercases or combination
 * of those separated with _
 *
 * examples:
 * var rs = randomstring(); // returns "ElZOtlOSLn49GeKLev2O"
 * var rs = randomstring(15, 'numbers_uppercases'); // returns "PXL3AE2USI7ZDQ2"
 * var rs = randomstring(20, 'numbers'); // returns "78394850802905961074"
 * 
 * @param  {integer} len length of generated string
 * @param  {string} type type of charachters in string
 * @return {string}
 */
just.randomstring = function (len, type) {

    len = len || 20;
    type = type || 'numbers_uppercases_lowercases';

    var strings = {
            numbers: '0123456789',
            uppercases: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            lowercases: 'abcdefghiklmnopqrstuvwxyz'
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
        choise = strings.numbers + strings.lowercases + strings.uppercases;
    }

    for (i = 0; i < len; i++) {
        ret +=  choise[Math.floor(Math.random() * choise.length)];
    }

    return ret;

};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = just.randomstring;
}