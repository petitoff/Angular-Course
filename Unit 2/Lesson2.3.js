var a = true;
var b = null;
var c = undefined;
console.log(a);
console.log(b);
console.log(c);
var arr = [1, 2, 3];
console.log(arr);
var d = [1, true];
console.log(d);
var Car;
(function (Car) {
    Car[Car["Toyota"] = 0] = "Toyota";
    Car[Car["Lexus"] = 1] = "Lexus";
    Car[Car["Mercedes"] = 2] = "Mercedes";
})(Car || (Car = {}));
var whichIndex = Car.Lexus;
console.log(whichIndex);
console.log(Car[whichIndex]);
var e = 1;
e = "a";
console.log(e);
