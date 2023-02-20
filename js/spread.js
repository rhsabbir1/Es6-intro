const max = Math.max(5,32,4,56,13,546,413,41,41,45,46,41);
// console.log(max)
const number = [56,13,413,41,41,45,46,41];
const max2 = Math.max(...number);
// console.log(max2)

const number2 = [...number];
number2.push(1555)

const number3 = [1,2,3,...number, 15 ,2 ,1]
console.log(number2)
console.log(number)
console.log(number3)