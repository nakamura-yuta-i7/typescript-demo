function buildName(firstName: string, ...rest_names: string[]) {
	return firstName + " " + rest_names.join(" ");
}

var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

console.dir( {employeeName} );

function buildName2(firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

var buildNameFun: (fname: string, ...rest: string[]) => string = buildName2;

console.dir( {buildNameFun} );
