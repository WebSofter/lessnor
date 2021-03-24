//Basic types
const stre:string = "Hello World"
const isBool:boolean = false
const intVal:number = 25
const arr:string[] = ["a", "b"]
const n:null = null
const u:undefined = undefined
//Void
function printUser(name: string) : void{
    console.log(name)
}
//Generic
const arr1:Array<number> = [0, 1]
//Tuple
const tuple: [string, number] = ["David", 79253826214]
//Any
let all:any = 25
all = "Hello"
//Function
function myFunc(name:string):void{
    console.log(name)
}
myFunc("David")

//Never
function errThrow(name: string) : never{
    throw new Error(name)
}
function infinite():never{
    while(true){

    }
}

//Type
type Login = string
const login: Login = "login"
//Multiple
type ID = string | number
const id1:ID = '17'
const id2:ID = 17
//Object
const o:object = {name: 'David', age: 28}
//Enum
enum Direction{
    top = 0,
    bottom = 1,
    left = 3,
    right
}
console.log('Direction[0]=', Direction[0], 'Direction.top=', Direction.top)