//inicializar una variable que puede cambiar en el tiempo
var WTF;
console.error("WTF: "+WTF)
WTF = 'QUIEN ES EL';
console.warn(WTF);
WTF = 'YA PASÓ';
console.info(WTF);

//inicializar muliples variables
var primero = "Hola",
    segundo = "¿Cómo",
    tercero = "estás?"

document.querySelector('.aqui').innerHTML = primero+" "+segundo+" "+tercero;