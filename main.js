let natija;

let num1 =(prompt("birinchi raqamni kiritin"))*1
let amal=prompt('amalni kiritin (+, -, /, *)')
let num2 =(prompt("ikkinchi  raqamni kiritin"))*1
switch(amal){

case '+':
natija =+ num1 +num2
console.log(natija);

break


case '-':
natija=num1-num2
console.log(Number(natija));

break

case '*':
natija=num1*num2
console.log(Number(natija));

break

case '/':
natija=num1/num2
console.log(Number(natija));

break
}

