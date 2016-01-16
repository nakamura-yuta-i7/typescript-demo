function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
var result1 = buildName("Bob"); //error, too few parameters
var result2 = buildName("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName("Bob", "Adams"); //ah, just right
console.dir({
    result1: result1,
    result2: result2,
    result3: result3,
});
function buildName2(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName2("Bob"); //works correctly now
var result2 = buildName2("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName2("Bob", "Adams"); //ah, just right
console.dir({
    result1: result1,
    result2: result2,
    result3: result3,
});
function buildName3(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1 = buildName3("Bob"); //works correctly now, also
var result2 = buildName3("Bob", "Adams", "Sr."); //error, too many parameters
var result3 = buildName3("Bob", "Adams"); //ah, just right
console.dir({
    result1: result1,
    result2: result2,
    result3: result3,
});
//# sourceMappingURL=optional_and_default_parameters.js.map