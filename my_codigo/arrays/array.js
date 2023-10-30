const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numeros = [10,20,30];
const meses = new Array('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre');
const deTodo = ["Hola",10,true,"si",null,{nombre:'Juan', trabajo:'Programador'}];
console.table(meses);
console.log(meses.length);

let imperativas = false;

//editar un array:

//--- FORMA IMPERATIVA DE AÑADIR ELEMENTOS AL ARRAY ---
//Añadir elemento a un determinado indice:
meses[12]='Ofiuco';
meses[5]='junnnnnnnnio';




/*
--- FORMA DECLARATIVA DE OPERAR ELEMENTOS AL ARRAY AL PRINCIPIO Y AL FINAL ---

*/

//añadir elemento al final del arreglo.
meses.push('Tetraktis'); 

//añade elementos al principio del array
meses.unshift('Merkaba'); 

console.log(meses);



//eliminar el ultimo elemento del array
meses.pop();
//eliminar el ultimo elemento del array
meses.pop();
//eliminar el primer elemento del array
meses.shift();

//eliminar el n elemento del array
meses.splice(5,1);
meses[5] = 'June';

if(imperativas){
    for(let i =0;i<meses.length;i++){
        console.log(`ESTE ES EL MES DE : ${meses[i]}`);
    }
}else{
    let suma = ['Alfa',...meses,'zita'];
    console.log(suma);
    for(let i =0;i<meses.length;i++){
        console.log(`ESTE ES EL MES DE : ${meses[i]}`);
    }
}


//Destructuración de arreglos:

const [primero] =meses;
const [alfa, beta,tercero] = meses;
const [, , ,cuarto] =meses;
const [, , , ,quinto,...resto] =meses;
console.log('Extrae el primer valor: const [primero] = meses. [primero]= '+primero);
console.log('Extrae el n-esimo valor: const [tercero] = meses3. [tercero]='+tercero);
console.log('Extrae el n-esimo valor sin variables adicionales: const [cuarto] = meses3. [cuarto]='+cuarto);
console.log(`const [, , , ,quinto,...resto] =meses; deja el valor de quinto como ${quinto} y los meses restantes como resto = [${resto}]`);

console.log();

//iteraciones declarativas:
const carrito = [
    {nombre: 'Alpha',precio:1500},
    {nombre: 'Beta',precio:5500},
    {nombre: 'Gamma',precio:5700},
    {nombre: 'Delta',precio:7500},
    {nombre: 'Epsylon',precio:8500},
    {nombre: 'Phi',precio:1000},
];

console.log('carrito.forEach:');


carrito.forEach(
    function(producto){
        //operación sobre todos los productos: reduzco el precio un 50% si vale 5000 o más
        if(producto.precio>=5000){
            producto.precio = producto.precio-(producto.precio*0.5);
        }
        console.log(`Nombre: ${producto.nombre} -- Precio: ${producto.precio}`);
    }
);

carrito.forEach(
    (prod)=>{
        if(prod.nombre.length>=5){
            prod.nombre +='_channel';
        }
        
        console.log(prod.nombre);
    }
);
console.log();

console.log('carrito.map');
//map crea un arreglo nuevo, modificado a partir de una función.
const end_carrito = carrito.map(
    (prod)=>{
        if(prod.nombre.length>=5){
            return prod.precio = prod.precio+(prod.precio*0.5);
        }
        else{
            return prod.precio;
        }
    }
);
console.table(end_carrito);

function main() {
    rl.question('ingresa un valor: ', t =>{


    });
    console.log('mete un numero');
    let t = parseInt(readLine());
    let suma = 0;
    for(var a0 = 0; a0 < t; a0++){
        var n = parseInt(readLine());
        for(var a1 = 0; a1 <n;a1++){
            if(n%3===0||n%5===0){
                suma +=n;
            }
        }
        return parseInt(suma);
    }

}
main();