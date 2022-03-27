var a: boolean = true;
var b: null = null;
var c: undefined = undefined;

console.log(a);
console.log(b);
console.log(c);

var arr: Array<number> = [1, 2, 3];
console.log(arr);

var d: [number, boolean] = [1, true];
console.log(d);

enum Car {
  Toyota,
  Lexus,
  Mercedes,
}

var whichIndex: Car = Car.Lexus;
console.log(whichIndex);
console.log(Car[whichIndex]);

var e: any = 1;
e = "a";
console.log(e);

var f: void = null;
console.log(f);
