System.register([], function(exports_1) {
    "use strict";
    var numberRegexp, ZipCodeValidator;
    return {
        setters:[],
        execute: function() {
            numberRegexp = /^[0-9]+$/;
            ZipCodeValidator = (function () {
                function ZipCodeValidator() {
                }
                ZipCodeValidator.prototype.isAcceptable = function (s) {
                    return s.length === 5 && numberRegexp.test(s);
                };
                return ZipCodeValidator;
            }());
            exports_1("ZipCodeValidator", ZipCodeValidator);
        }
    }
});
//# sourceMappingURL=ZipCodeValidator.js.map