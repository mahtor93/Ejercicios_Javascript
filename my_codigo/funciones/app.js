//Declaracion de funcion (function declaration)
sumar(1,1); //se pueden invocar antes
function sumar(a,b){
    return a+b;
}
console.log(sumar(2,5));
console.log(sumar(sumar(sumar(1,3),5),sumar(3,8)));


//Expresión de función (Function expression)

const sumar2 = (a,b) => {
    return(a+b);
};
//La función se declara y luego se ejecuta
console.log(sumar2(3,5));

//Parámetros por defecto en las funciones
function saludar(nombre,apellido =' '){
    console.log(`Hola ${nombre} ${apellido}`);
}
saludar('gato');
saludar('perro','leon');

//Ejercicio: funciones como método de objetos

const carrito = [
    {nombre: 'Alpha',precio:1500},
    {nombre: 'Beta',precio:5500},
    {nombre: 'Gamma',precio:5700},
    {nombre: 'Delta',precio:7500},
    {nombre: 'Epsylon',precio:8500},
    {nombre: 'Phi',precio:1000},
];

const boleta = {
    //Boleta es un objeto que contiene un array de objetos, un método para sumar sus valores y el atributo "total". 

    items : [],
    total:0,
    iva : 0.19,
    dcto: 0,
    
    set addDcto(dcto){
        this.dcto = dcto;
    },
    get getDcto(){
        return this.dcto;
    },

    addElemento:function (producto){
        this.items.push(producto);
    },
    sumaElementos:function(){ 
        this.total =0;
        this.items.forEach(item =>{
            this.total += item.precio;
        });
    },
    totalNeto:function(dcto=0){
        this.total += this.total*this.iva;
        this.total -= this.total*(this.getDcto/100);
    },
    printBoleta:()=>{
        console.table(boleta.items);
        boleta.sumaElementos();
        console.log(`El subtotal es de ${boleta.total}`);
        boleta.totalNeto();
        console.log(`se añade un ${boleta.getDcto}% de dcto`);
        console.log(`El total luego de impuestos es de ${boleta.total}`);
    }

}; 

//Añadir un elemento a la boleta:



boleta.addElemento(carrito[1]);
boleta.addElemento(carrito[0]);
boleta.addElemento(carrito[3]);
boleta.addDcto = 50;
boleta.printBoleta();
