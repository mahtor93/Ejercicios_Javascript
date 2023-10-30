let mensaje = prompt("Escribe un mensaje");

//eliminar espacios en ambas direcciones
mensaje.trim();
/*eliminar el espacio al principio:
mensaje.trimStart();
eliminar el espacio al final:
mensaje.trimEnd();
*/

//reemplazar elementos del string y reasignado a la variable mensaje:
mensaje = mensaje.replace('x',' Vacio ');


let premsg = "Tu mensaje: ";
let largo = mensaje.length; //medimos la longitud del mensaje
let find = mensaje.indexOf("a"); //encuentra la posición de un elemento, en este caso 'a'
let incd = mensaje.includes("a"); //retorna un booleano si el elemento está

document.querySelector(".msg").innerHTML = premsg.concat(mensaje);
document.querySelector(".cantidad").innerHTML = `Largo: ${String(largo)}`;


document.querySelector(".incdl").innerHTML =
  "¿incluye a? " + (incd ? "Si" : "No");

if(incd){
  document.querySelector(".find").innerHTML = `índice de a: ${find}`;
}

//Slice para 'cortar' los strings
let l = largo/2;
let msgSlice = mensaje.slice(l);
document.querySelector('.sliced1').innerHTML = `mensaje cortado en ${l}: ${msgSlice}`;

//substring para 'cortar los strings
let m = largo/3;
let msgSlice2 = mensaje.substring(m); //substring ajusta los parametros para que no quede en null.
document.querySelector('.sliced2').innerHTML = `mensaje cortado en ${m}: ${msgSlice2}`;

//charAt corta hasta el caracter 'n'
let n = 0; //la inicial
let msgSlice3 = mensaje.charAt(n);
document.querySelector('.sliced3').innerHTML = `CharAt ${n}: ${msgSlice3}`;

//repetir algo:
//mensaje.repeat(3); repite 3 veces un string
let rep = 5;
document.querySelector('.repeat').innerHTML = `caracter repetido ${rep} veces: ${mensaje.charAt(n).repeat(rep)}`;

//split permite dividir un string en distintos strings, separados por cada caracter seteado como divisor.
//transforma el string en un array
let charSplit = 's';
let splitted = mensaje.split(charSplit);
console.log(splitted);
document.querySelector('.spliter').innerHTML =`Se corta en ${charSplit}: ${splitted}`;


//convertir mensaje a mayusculas:
document.querySelector('.mayus').innerHTML = mensaje.toUpperCase();
//convertir mensaje a minusculas:
document.querySelector('.minus').innerHTML = mensaje.toLowerCase();