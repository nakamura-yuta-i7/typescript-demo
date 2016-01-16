function buildName(firstName) {
    var rest_names = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest_names[_i - 1] = arguments[_i];
    }
    return firstName + " " + rest_names.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
console.dir({ employeeName: employeeName });
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName2;
console.dir({ buildNameFun: buildNameFun });
//# sourceMappingURL=rest_parameters.js.map