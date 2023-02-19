function sum(first,sceond = 0){
    const total = first + sceond ;
    return total;
}

const total = sum(10)
console.log(total)

function fullName (firstName , lastName = 'Ahmed'){
    // lastName = lastName || 'Ahmed'
    // if(lastName == undefined){
    //     lastName = 'Ahmed';
    // }
    const fullName = firstName +" "+lastName;
    return fullName;
}

const name = fullName('Sabbir',);
console.log(name)


function add(num1 = 0,  num2 = 0){
    const sum = num1 + num2 ;
    return sum;
}

const sumNumber = add( 10 );
console.log(sumNumber)