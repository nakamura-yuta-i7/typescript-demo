"use strict";
var zipValidator = require('./ZipCodeValidator');
var lettersValidator = require('./LettersOnlyValidator');
var strings = ['Hello', '98052', '101'];
var validators = {};
validators['ZIP code'] = new zipValidator();
validators['Letters only'] = new lettersValidator();
strings.forEach(function (s) {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
