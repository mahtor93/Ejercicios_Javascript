//let es una variable dinámica y const es una variable fija
let nombre = prompt('Cuál es tu nombre?'); 
if(nombre.length==0){
    nombre = 'Nadie';
}
document.querySelector('.contenido').innerHTML= `${nombre} está aprendiendo javascript moderno`; //seleccion de contenido en el archivo html
