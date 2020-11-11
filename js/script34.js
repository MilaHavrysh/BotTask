// Write code under this line


const users =
    [{ name: "Moore Hensley" },
        { name: "Sharlene Bush" },
        { name: "Ross Vazquez" },
        { name: "Elma Head" },
        { name: "Carey Barr" },
        { name: "Blackburn Dotson" },
        { name: "Sheree Anthony" }];

function getUserNames(users) {
    return users.map(function ({ name }) {
        return name;
    });
        }

console.log(getUserNames(users));



//map
//Получи массив имен всех пользователей 
//(свойство name) используя деструктурирующее присваивание 
//для параметра функции({ name }) без пробелов и переносов на новую строку.

//Используй только перебирающие методы массива которые не изменяют 
//(не мутируют) исходный массив.Т.е.нельзя использовать for, splice, push и т.п.мутирующие методы.

//Деструктурирующее присваивание для параметра функции
//PS Деструктурирующее присваивание (ДП):

//Объект как параметр без ДП
//const object = {num : 2}
//function getNum (obj) { return obj.num; }
//console.log(getNum(object)) // 2
//ДП
//const object = {num : 2}
// const num  =  object.num;
//const { num } = object;
//console.log(num) // 2
//Объект как параметр c ДП
//const object = {num : 2}
//const getNum =function (obj) { return obj.num; }
//function getNum({ num }) { return num; }
//console.log(getNum(object)) // 2