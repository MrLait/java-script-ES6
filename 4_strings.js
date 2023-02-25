// можно создавать строки написав ' ' и " ", но в новом синтаксисе можно писать обратные ковычки ``
// обратные ковычки позволяют вставлять при помощи синтаксиса ${} динамические данные.
// Так же они не будут конфликтовать с обычными ковычками
// сохраняют форматировение т.е любое колличестов пробелов и переносов строк 

const title = 'Hello'

const template = `
                          
        <h1> ${title} </h1>
`
console.log(template)

//Methods
const str = 'Hello'
console.log(str.startsWith('He'))
console.log(str.startsWith('e'))
console.log(str.endsWith('o'))
console.log(str.includes('llo'))
console.log(str.repeat(3))
console.log(str.trim('He'))
console.log(str.startsWith('He'))