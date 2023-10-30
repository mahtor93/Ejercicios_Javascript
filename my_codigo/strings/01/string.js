//formas de declarar un string:
let a = 123 ;

const primero = 'Primer String';
const segundo = String('Segundo String');
const segundo_a = String(a);
const tercero = new String('Ultimo');
console.log(typeof(segundo_a));

document.querySelector('.primero').innerHTML = primero;
document.querySelector('.segundo').innerHTML = segundo;
document.querySelector('.segundoa').innerHTML = typeof(segundo_a)+" "+segundo_a;
document.querySelector('.tercero').innerHTML = tercero;