//Промисы это более удобная коснтруцкия позволяющая работать с асинхронным кодом
//Задача промисов обернуть асинхронный код и проще с ним взаимодействовать убирая уровень вложенности, при помощи класса new Promise() который
//в конструктор принимает метод callback в котором описывается какая-то асинхронность. А параметры конструктора resolve, reject
//в resolve эта функция, которая возвращает значение при успешмон выполнении, а reject если ошибка
//У промиса есть 3 метода catch, then, finally
// catch - позволяет отловить ошибкукоторая была указана в reject
// then - будет выполнен тогда когда выполнится асинхронный код и вернет значения из resolve
// finally - вызывается в любом случае даже если была очистка
// Promise.all([промисы1,,,,промисыт]).then() - ждет пока завершатся весь массив промисов
// Promise.race([промисы1,,,,промисыт]).then() - ждет пока завершится самый быстрый проис из массива
//Так же можно создаватьцепочку промисов чейнить т.е внутри промиса создавать еще один не создавая новый уровень вложенности.
//Если используюем async/await то для получения resolve и обработки reject нужно оборачивать код в try/catch
setTimeout(() => {
    console.log("d")
}, 500)

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success')
    }, 500)
})

promise.then( data => console.log(data))

const delay = ms => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('Done')}, ms)
})

delay(1000)
    .then(data => delay(1000))
    .then(data => console.log(data))

async function asyncDelay(){
    try {
        const data = await delay(2000)
        console.log(data)
    } catch (e) {
        console.log('Error', e);
    }
}

asyncDelay()