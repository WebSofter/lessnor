/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Functions/Rest_parameters
 * 
 * Оставшиеся параметры (rest parameters)
 * 
 * Синтаксис оставшихся параметров функции позволяет представлять неограниченное множество аргументов в
 * виде массива.
 */

//Обычная передача в функцию параметров
let getSum = (x, y, z)=>{
    return x + y + z;
}
console.log(getSum(1,2,3));

//Передача через spread оператор
let getSumSpread = (...values)=>{
    //values - обычный массив с параметрами, которые вводятся при использовании
    console.log(values.reduce(function(lastValue, currentValue){
        return (lastValue + currentValue);
    }));
}
getSumSpread(1, 2, 3, 6);

//Передача с параметрами по умолчанию и через spread
let greteeng = (hello="By ", ...values) =>{
    let text = values.reduce(function(lastValue, currentValue){ return (lastValue + currentValue); })
    console.log(hello + text);
}
greteeng("Hello ", "World!", "Are ", "you ", "happy?");