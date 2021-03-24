/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Classes
 * 
 * Классы в JavaScript
 * 
 * Классы в JavaScript были введены в ECMAScript 2015 и представляют собой синтаксический сахар над 
 * уществующим в JavaScript механизмом прототипного наследования. Синтаксис классов не вводит новую
 * объектно-ориентированную модель, а предоставляет более простой и понятный способ создания объектов и
 * организации наследования.
 */

//Создаем обычный класс
class Task{
    constructor(name = `${Task.getName()}`){
        this.name = name;
        Task.count +=1;//Статическое свойство
        this._done = false;//Имя свойства, чтобы указать, что оно скрытое, нужно начать с нижнего подчеркивания
    }
    static getName(){
        return 'Задача ' + Task.count;
    }
    //Имя свойства не должно совпадать со свойством get/set
    get done(){
        return this._done;
    }
    set done(value){
        if(typeof value === 'boolean')
            this._done = value;
        else
            console.error("Свойству можно указать только тип Boolean");
    }
    complete(){
        this._done = true;
    }
}
Task.count = 0;//Инициализируем счетчик в виде указания 0 статическому свойству
let task1 = new Task();//Создаем задачу 1
let task2 = new Task();//Создаем задачу 2
console.log(task1.name);//Выводим название задачи 1
console.log(task2.name);//Выводим название задачи 2
console.log("Число задач: " + Task.count);//Выводим число задач
task1.complete();//Заканчиваем задачу 1
task2.complete();//Заканчиваем задачу 2
console.log(task1.done);//Выводим состояние задачи 1
console.log(task2.done);//Выводим состояние задачи 2
task1.done = 'Тут будет ошибка!';