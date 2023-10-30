const pj = {
    nombre:'ezekel',
    vida: 32,
    vivo:true,
};

function Pj(nombre,vida){
    this.nombre = nombre;
    this.vida = vida;
    if(vida>0){
        this.vivo= true;
    }
}

const pj2 = new Pj('Askuya',22);

console.log(pj2);

console.log(Object.keys(pj2));
console.log(Object.values(pj2));
console.log(Object.entries(pj2));