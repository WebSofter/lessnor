/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
 * 
 * Свойство Object.prototype представляет объект прототипа Object.
 * 
 * Все объекты в JavaScript являются потомками Object; 
 * все объекты наследуют методы и свойства из прототипа 
 * объекта Object.prototype, хотя они и могут быть 
 * переопределены (за исключением объекта Object с прототипом null, 
 * то есть, созданным вызовом Object.create(null)). 
 */

/**
 * На примере докажем, что обычное объявление объекта
 * и объявление через глобальный Object - одно и то же
 */
//Обычное объявление
const Person = {
    name: "Adam",
    age: 30,
    greet: function(){
        console.log("greet");
    }
}
//Объявление через глобальный Object
const Noah = new Object({
    name: "Noah",
    age: 25,
    greet: function(){
        console.log("greet");
    }
})
//Добавим глобальный прототип к Object
Object.prototype.genus = "humman";
Object.prototype.sayHello = ()=>{
    console.log("Hello all!");
}
//Это выведет одинаковую структуру c новыми глобальными прототипами genus и sayHello 
console.log(Person, Noah);

/**
 * Создание нового локального прототипа к объекту - есть несколько способов
 */
/**
 * 1-ый способ - наследование. Через create() создает новый объект из указанного объекта-прототипа. 
 * Здесь Abraham создается с использованием Noah в качестве объекта-прототипа.
 */
const Abraham = Object.create(Noah);
console.log(Abraham);

/**
 * 2-ой способ - функция. Через локальный prototype
 */
function Abrahamic(name, age){
    this.name = name;
    this.age = age;
}
Abrahamic.prototype.religion = "Abrahamic"
const Moses = new Abrahamic('Moses', 20);
console.log(Moses);

/**
 * 3-ой способ - .call(). Через родительскийметод call
 */

function Jew(name, age){
    Abrahamic.call(this, name, age);
}
 Jew.prototype.revelation = "Psalms";
 const Solomon = new Jew("Solomon", 18);
 console.log(Solomon);