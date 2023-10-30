//crear numeros:

const numero_1 = 19;
const numero_2 = -128;
const base = 2;
const pote = 6;
const numero_random = Math.random();
const flot = 0.12345;
let puntaje = 5;
const grup = [];
for (let i = 0; i < 5; i++) {
    grup[i] = Math.round(Math.random()*100);
}

console.log(grup);
document.querySelector('.rand').innerHTML = `Random: ${numero_random}`;
document.querySelector('.integ').innerHTML = `Entero: ${numero_1}`;
document.querySelector('.flota').innerHTML = `decimal: ${flot}`;

//métodos:
const pi = Math.PI;

document.querySelector('.pie').innerHTML = `Pi es un ${typeof(pi)}: ${pi}`;
document.querySelector('.redinf').innerHTML = `Pi redondeado con .round : ${Math.round(pi)} y con .floor: ${Math.floor(pi)}`; //redondea hacia abajo tambien sirve floor
document.querySelector('.redsup').innerHTML = `Pi redondeado con .ceil : ${Math.ceil(pi)}`; //redondea hacia arriba
document.querySelector('.raizq').innerHTML = `La raiz cuadrada de ${numero_1} es ${Math.sqrt(numero_1)}`;
document.querySelector('.absol').innerHTML = `El valor absoluto de ${numero_2} es ${Math.abs(numero_2)}`;
document.querySelector('.poten').innerHTML = `${base} elevado a ${pote} es ${Math.pow(base,pote)}`;
document.querySelector('.menor').innerHTML = `El número más chico en (${grup}) es ${Math.min(...grup)}`;
document.querySelector('.result').innerHTML = `(10+20+30+40)*0.2 = ${(10+20+30+40)*0.2}`;
document.querySelector('.incr').innerHTML = `Incremento ${puntaje++}+1=${puntaje++}`;
document.querySelector('.dec').innerHTML = `Decremento ${--puntaje}-1=${--puntaje}`;
//Convertir numeros
let value = "20";
let value2 = "20.2";
document.querySelector('.trans').innerHTML = `Hacemos que ${value} pase de ${typeof(value)} a number: Number.parseInt(${value}) = ${Number.parseInt(value)}, ahora es ${typeof(Number.parseInt(value))}`;
document.querySelector('.afloat').innerHTML = `Hacemos que ${value2} pase de ${typeof(value2)} a float: Number.parseFloat(${value2}) = ${Number.parseFloat(value2)}, ahora es ${typeof(Number.parseInt(value2))}`;
let v1= 20;
let v2 = "20";
let v3 = 30;
document.querySelector('.masque').innerHTML = `Es ${v1} > ${v3}? : ${v1>v3}`;
document.querySelector('.minque').innerHTML = `Es ${v1} < ${v3}? : ${v1<v3}`;
document.querySelector('.eqque').innerHTML = `Es ${v1} == ${v3}? : ${v1==v3}`;
document.querySelector('.esig').innerHTML = `Es ${v1} === ${v2}? : ${v1===v2}, porque ${v1} es ${typeof(v1)} y ${v2} es ${typeof(v2)}`;
let p1 = "test";
let p2 = "Test";
document.querySelector('.diff2').innerHTML = `Es ${p1} == ${p2}? : ${p1==p2}, pero ${p1.toLowerCase()} == ${p2.toLowerCase()} es ${p1.toLowerCase==p2.toLowerCase}`;


let u1;
let u2 = null;
document.querySelector('.esundefined').innerHTML = `El valor de ${u1} es : ${typeof(u1)} porque se declaró pero no s definió 'let u1'`;
document.querySelector('.esnull').innerHTML = `El valor de ${u2} es : ${typeof(u2)}, así es. Javascript ES6 considera a null como un objeto vacío`;
document.querySelector('.sinembargo').innerHTML = `${u1} == ${u2}? : ${u1==u2}`;
document.querySelector('.ademas').innerHTML = `${u1} === ${u2}? : ${u1===u2}`;