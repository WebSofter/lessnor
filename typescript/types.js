//Basic types
var stre = "Hello World";
var isBool = false;
var intVal = 25;
var arr = ["a", "b"];
var n = null;
var u = undefined;
//Void
function printUser(name) {
    console.log(name);
}
//Generic
var arr1 = [0, 1];
//Tuple
var tuple = ["David", 79253826214];
//Any
var all = 25;
all = "Hello";
//Function
function myFunc(name) {
    console.log(name);
}
myFunc("David");
//Never
function errThrow(name) {
    throw new Error(name);
}
function infinite() {
    while (true) {
    }
}
var login = "login";
var id1 = '17';
var id2 = 17;
//Object
var o = { name: 'David', age: 28 };
//Enum
var Direction;
(function (Direction) {
    Direction[Direction["top"] = 0] = "top";
    Direction[Direction["bottom"] = 1] = "bottom";
    Direction[Direction["left"] = 3] = "left";
    Direction[Direction["right"] = 4] = "right";
})(Direction || (Direction = {}));
console.log('Direction[0]=', Direction[0], 'Direction.top=', Direction.top);
