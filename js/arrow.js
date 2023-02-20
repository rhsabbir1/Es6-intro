function add(first , first){
    const total = first + first;
    return total;
}

const numberAdd = add(5 , 4)
console.log()


const sum = (first , second) =>{
    console.log(first + second)
}
// sum(5, 4)

// more arrow  function 
const fullName = (first , second) => first + second;

// no parameter  arrow function 
const getPi = () => 3.1416;

// one parameter 

// 1 st way
const dubble = (num) => num * 2;
//  2nd way 
const fiveTimes = num => num * 5;

// multiline  arrow  function 
const calculton = (a , b ,c ) =>{
    const sum = a+b+c ;
    const result = sum / 3;
    return result;
}
const calc = calculton(5,5,5);
console.log(calc)
 