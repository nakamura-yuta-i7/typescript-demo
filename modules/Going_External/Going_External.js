System.register(['./ZipCodeValidator', './LettersOnlyValidator'], function(exports_1) {
    "use strict";
    var zip, letters;
    var strings, validators;
    return {
        setters:[
            function (zip_1) {
                zip = zip_1;
            },
            function (letters_1) {
                letters = letters_1;
            }],
        execute: function() {
            // Some samples to try
            strings = ['Hello', '98052', '101'];
            // Validators to use
            validators = {};
            validators['ZIP code'] = new zip.ZipCodeValidator();
            validators['Letters only'] = new letters.LettersOnlyValidator();
            // Show whether each string passed each validator
            strings.forEach(function (s) {
                for (var name in validators) {
                    console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
                }
            });
        }
    }
});
//# sourceMappingURL=Going_External.js.map