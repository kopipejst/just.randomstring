/*global require*/
var mocha = require('mocha'),
    expect = require('chai').expect;

describe('just.randomstring', function () {
    var randomstring = require('../just.randomstring.js');

    describe('lengths', function () {
        it('expect to not be undefined', function () {
            expect(randomstring()).not.to.be.an('undefined');
        });
        it('expect 20 chars by default', function () {
            expect(randomstring()).to.have.length(20);
        });
        it('expect 50 chars if first param is 50', function () {
            expect(randomstring(50)).to.have.length(50);
        });
        it('expect 0 chars is first param is less than zero', function () {
            expect(randomstring(-2)).to.have.length(0);
        });
        it('expect 0 chars is first param is not a number', function () {
            expect(randomstring('two')).to.have.length(0);
        });
    });

    describe('types (tested with length 500)', function () {
        it('expect to return string', function () {
            expect(randomstring()).to.be.a('string');
        });
        it('expect to have "a", "1", "A" in response by default', function () {
            expect(randomstring(500)).to.contain('a').and.contain('1').and.contain('A');
        });
        it('expect to have "1" for type "numbers"', function () {
            expect(randomstring(500, 'numbers')).to.contain('1');
        });
        it('expect not to have "a" nor "A" for type "numbers"', function () {
            expect(randomstring(500, 'numbers')).not.to.contain('a').and.contain('A');
        });
        it('expect to have "A" for type "alphauppercase"', function () {
            expect(randomstring(500, 'alphauppercase')).to.contain('A');
        });
        it('expect not to have "1" nor "a" for type "alphauppercase"', function () {
            expect(randomstring(500, 'alphauppercase')).not.to.contain('a').and.contain('1');
        });
        it('expect to have "a" for type "alphalowercase"', function () {
            expect(randomstring(500, 'alphalowercase')).to.contain('a');
        });
        it('expect not to have "A" nor "1" for type "alphalowercase"', function () {
            expect(randomstring(500, 'alphalowercase')).not.to.contain('A').and.contain('1');
        });
        it('expect to have "a" and "1" for type "numbers_alphalowercase"', function () {
            expect(randomstring(500, 'numbers_alphalowercase')).to.contain('a').and.contain('1');
        });
        it('expect to have "a" and "A" for type "alphauppercase_alphalowercase"', function () {
            expect(randomstring(500, 'alphauppercase_alphalowercase')).to.contain('a').and.contain('A');
        });
        it('expect not to have "1" for type "alphauppercase_alphalowercase"', function () {
            expect(randomstring(500, 'alphauppercase_alphalowercase')).not.to.contain('1');
        });
        it('expect to ignore unvalid types as second param', function () {
            expect(randomstring(500, 'alphauppercase_alphalowercase_numbertypo')).not.to.contain('1');
        });
        it('expect to use numbers_alphalowercase_alphauppercase when type cant be extracted from param', function () {
            expect(randomstring(500, 'number')).to.contain('A').and.contain('a').and.contain('1');
        });
    });

});
