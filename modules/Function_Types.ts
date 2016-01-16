function add2(x: number, y: number): number {
    return x+y;
}

var myAdd2 = (x: number, y: number): number => x+y;

console.dir( add2(1,2) );
console.dir( myAdd2(1,2) );
