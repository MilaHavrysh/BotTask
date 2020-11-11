const findElement =
  document.querySelectorAll('#categories .item ');
  console.log(`В списке ${findElement.length} категории.`)
findElement.forEach((element) =>
  console.log(`Категория:${element.querySelector('h2').textContent}\nКоличество элементов: ${element.querySelectorAll('li').length}`))




  //const findElement = function (elem) {
// const element = document.querySelectorAll(elem);
//return`В списке ${element.length} категории.`
//}

//console.log(findElement('.item'))
//console.log(findElement[0].textContent)

//const findh = document.querySelectorAll('#categories .item h2')
  //.forEach((element) => {
  //  console.log(element.textContent);
       
  //}
  //)
  //const findli = document.querySelectorAll('#categories')
 // .forEach((element) => {
  //  console.log(element.textContent);
       
  //}
 // )
  
//const findLi = document.querySelectorAll('#categories .item')
 // .forEach((element) => {
  //console.log(element.length);
    
  ///}
//)

//console.log(findh)

//console.log(document.querySelectorAll('li'))


//console.log(findh[0].textContent)
//console.log(findh[1].textContent)
//console.log(findh[2].textContent)




