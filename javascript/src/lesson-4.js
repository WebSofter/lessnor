/**
 * https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/template_strings
 * 
 * Шаблонные строки и теги (template strings)
 * Шаблонными литералами называются строковые литералы, допускающие использование выражений внутри.
 * С ними вы можете использовать многострочные литералы и строковую интерполяцию. В спецификациях
 * до ES2015 они назывались "шаблонными строками". 
 */

//Шаблонные строки оборачиваются в обратные ковычки ``
let world = 'World!';
let guis = 'Guis!';
let template = `Hello ${world} ${guis}`;
console.log(template);

//Шаблонные теги - это функции для обработки входных строк
let toTransform = (literals, name, surname)=>{
    //name и surname прописываются в соответстивии с параметрами в ${}. Их может быть сколь угодно
    //console.log(literals);//["Hello, ", " ", "! What do you?"]
    return literals[0] + name.toUpperCase() + ' ' + surname.toLowerCase();
}
let name = 'John', surname = 'Doe';
let text = toTransform`Hello, ${name} ${surname}! What do you?`;
console.log(text);