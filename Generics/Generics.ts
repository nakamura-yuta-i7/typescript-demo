function identity<T>(arg: T): T {
    return arg;
}

var myIdentity: <T>(arg: T)=>T = identity;

console.dir( myIdentity<string>("yuta") );
