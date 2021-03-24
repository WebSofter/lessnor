/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/for...of
 * 
 * Цикл for...of
 * 
 * Оператор for...of выполняет цикл обхода итерируемых объектов (включая Array, Map, Set, объект
 * аргументов и подобных), вызывая на каждом шаге итерации операторы для каждого значения из различных
 * свойств объекта.
 */

let browsers = ['Chrome', 'Firefox', 'Edge', 'Opera'];

//Старый способ итерации с for...in
for(let index in browsers)
{
    console.log(browsers[index]);
}

//То же самое способом forEach
browsers.forEach((value, index, array)=>{
    console.log(value);
});

//То же самое новым способом for...of
for(let browser of browsers)
{
    console.log(browser);
}