let x1 = 20;
let x2 = 12;
let y1 = 20;
let y2 =15;

function rectPs(a, b, c, d, ){

    return `Peremetr=${2 * Math.abs(a-b)+2*Math.abs( c - d)} 
    Yuza = ${Math.abs(a-b)*Math.abs( c- d)} `
}

console.log(rectPs(x1, x2, y1, y2));

let x = 20;


function poverA3(a) {
    return `${a} ning 3-darjasi ${a**3} ga teng` 
}

console.log(poverA3(x));



// =====================

let ixtoyoriy = 15;

function masala2(a) {
  
    return ` ${a} ning  2-darajasi ${a**2} ga teng
    ${a} ning 3-darajasi ${a**3} ga teng,
    ${a} ning 4-darajasi ${a**4} ga teng 
    `
}
console.log( masala2(ixtoyoriy));


// ========================


let s1 = 20;

let s2 = 10;

function mean(a, b) {
    return `Sonlarning orta arfimetigi ga teng ${(a-b)*2}
    geometrigi ${Math.round(Math.sqrt(a*b))} ga teng
    `
}

console.log(mean(s1, s2));



// ================================


let burchak = 20;

function triangle(a) {
   
    return `Ucgbercha peremetri ${a*3} ga teng
            Uhburchak yuzasi ${Math.round(Math.sqrt(3)/4*(a**2))} ga teng
    `
}
console.log(triangle(burchak));




// =======================================================


let natural = 341657;
let raqamlar = 0;

natural = natural + ""

function digitCount(a, b) {


    for(let i = 0; i < a.length; i++){
        b +=  Number(a[i])
    }
return `sonning lengzi ${a.length} ga teng
Sonning yigindisi ${b} ga teng
`
}
console.log(digitCount(natural, raqamlar));





// ==================================

let musbat = 234267;
let sum1 

musbat =String(musbat )
sum1= String(sum1)

function invertDigit(a, b) {
    b = "";
    for(let i = a.length-1; i >= 0; i--){
        b = b +(a[i])
    }

return b
}

console.log(invertDigit(musbat, sum1));



// =======================================================



let k = 7979;
String(k)

function addLeft(a) {
    
    return `${a+"R"}`

}
console.log(addLeft(k));



// =================================



let ll = 7979;
String(ll)

function addLeft(a) {
    
    return `${"R"+ a}`

}
console.log(addLeft(ll));





// =======================================



let son1 = 30;
let son2 = 20;

let yigindi2 = 0;
let yigindi3 = 0;


function Swap(a, b, c, d) {
   
   c =c + b
   d =d + a
   return `${c} va ${d}`

}

console.log(Swap(son1, son2, yigindi2, yigindi3));
