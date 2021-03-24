/**
 * Urls
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 * 
 * 1. Statements and declarations
 * 
 * The var statement declares a variable, optionally initializing it to a value.
 * 
 * 2. Concept of using
 * 
 * var varname1 [= value1] [, varname2 [= value2] ... [, varnameN [= valueN]]];
 * varnameN - Variable name. It can be any legal identifier.
 * valueN - Initial value of the variable. It can be any legal expression. Default value is undefined.
*/



 /**
  * Declaration and initializing
  * 
  * Оператор var объявляет переменную, опционально инициализируя ее значением.
  */
console.log(name)
//let name

/**
 * Пример всплытия значения переменной, объявленной, как var
 */

var callbacks = []
for (var i = 0; i < 3; ++i) {
  callbacks[i] = function () {
    console.log(i)
  }
}
callbacks.forEach(function (cb) {
  cb()
})