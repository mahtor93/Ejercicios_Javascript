//acceso a elementos del DOM

/*
let elemento;
elemento = document;
elemento = document.all;//deprecao
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].method;
elemento = document.forms[0].classList;
elemento = document.forms[0].action;
elemento = document.links;
elemento = document.links[1];
elemento = document.links[0].classList;
elemento = document.links[0].className;
elemento = document.images;
elemento = document.scripts;

console.log(elemento);
*/

//Seleccionar elementos por su clase

const clase = document.getElementsByClassName('content')[0];
const header = document.getElementsByClassName('hader')[0];
console.log(header);