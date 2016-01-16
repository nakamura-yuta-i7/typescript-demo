var myAdd3: (x:number, y:number)=>number = 
    function(x: number, y: number): number { return x+y; };

var myAdd4: (baseValue:number, increment:number) => number = function(x: number, y: number): number { return x+y; };

console.dir( myAdd3(1, 2) );
console.dir( myAdd4(1, 2) );
