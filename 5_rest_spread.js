//Rest ... - если мы не знаем какое колличество параметров будет принимать функция
//Spread ... - позволяет вывести значения из массива убрав []. Применяется например если функция должна принимать не массив, а последовательность из чисел
// при клонировение массива, а также выполнив Destructuring можно исключить некоторые поля из объекта const {city, ...rest} = address
// или можем создать новый объект изменив существующие поля или добавить новые const newAddress = {...address, street: "asdasd", newField: 'asd'}
//Destructuring - позволяет быстрее получать определенные значения, 
//а так же при работе с объектами позволяет разложить объект по полям, изменить имя полей, присвоить начальные значения
function average(...arr) {
    return arr.reduce((acc, i) => acc += i, 0) / arr.length
}
console.log(average([10, 20, 30, 40]))
console.log(average(10, 20, 30, 40, 50))

const array = [1,2,3,5,8,13]
console.log(array)
console.log(...array)
console.log(Math.max(array))
console.log(Math.max(...array))

const fib = [1, ...array]

console.log(fib)

//Destrucuring
const [a, b, ...c] = array
console.log(a,b,c)
//Object
const address = {
    country: "Russia",
    city: "Moskov",
    street: "Lenina",
    concat: function(){
        return `${this.country}, ${this.city}, ${this.street}`
    }
}
console.log(address.concat())

// const {city, country, street, concat} = address
// console.log(city)
// console.log(concat.call(address))

//Spread
const {city, ...rest} = address
console.log(city)
console.log(rest)

const newAddress = {...address, street: "asdasd"}
console.log(newAddress)