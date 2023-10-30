//const nombre = 'Kebrus';
const vida = 20;
const ataque = 5;

//un objeto agrupa todo en una sola variable

const pj = {
    mostrarInfo: function(){
        console.log(`El personaje se llama ${this.nombre} y usa el ${this.arma.nombreArma}`);
    },
    nombre: 'Kebrus',
    vida:20,
    ataque:5,
    clase: 'Mago',
    poderMagico:14,
    avatar: "avatar.png",
    arma: {
        nombreArma: 'Bastón Mágico del bosque',
        poderMagico: 0.05,
        cuerpoAcuerpo: 3,
        piedraMagica:{
            nombrePiedra:'Lirmidan',
            habilidad1:'daño de fuego',
            habilidad2:'antorcha',
            habilidad3:'Bola de fuego',
        }
    }
};
//Se puede cambiar un atributo de la clase directamente
pj.arma.piedraMagica.habilidad3 = 'Descarga de fuego';//bola de fuego es demasiado poderosa para el nivel del personaje
//No funciona post destructuración
console.log('mostrar info:');
pj.mostrarInfo();
console.log('--------------');

document.querySelector('.pj').innerHTML = `El personaje es un ${pj.clase} que se llama ${pj.nombre}, tiene una vida de ${pj.vida} y un ataque de ${pj.ataque}`;
const pjAvatar = document.getElementById('avatar');
pjAvatar.src = pj.avatar;

//destructurar objeto:

//destructurando un objeto dentro de un objeto:
const { nombre,clase,avatar, arma:{nombreArma, poderMagico, piedraMagica:{ nombrePiedra, habilidad3 } } } = pj;
//transforma los atributos de un objeto en variables con los mismos nombres

document.querySelector('.pj2').innerHTML = `const { nombre } = pj da como resultado ${nombre}`;
document.querySelector('.arma').innerHTML = `${nombre} tiene un arma llamada ${nombreArma} y aumenta su poder mágico en ${Math.round(pj.poderMagico*poderMagico)} `;

//borrar un atributo del objeto no requiere ordenamiento de instrucciones (se borrará igual)
delete pj.arma.piedraMagica.habilidad2;


//document.querySelector('.piedramagica').innerHTML = `${nombreArma} tiene engarzada una piedra llamada ${nombrePiedra} que le da el poder de ${habilidad3}`;
document.querySelector('.pm').innerHTML = `${nombreArma} tiene engarzada una piedra llamada "${nombrePiedra}" que le da el poder de ${habilidad3}`;

//Object.freeze(pj);
document.querySelector('.freeze').innerHTML = `Object.freeze(pj) hace que el objeto pj sea freeze = ${Object.isFrozen(pj)} y ${Object.isFrozen(pj)? "no se pueda modificar en absoluto":"se pueda modificar"}`;

Object.seal(pj);
document.querySelector('.seal').innerHTML = `Object.seal(pj) impide que uno añada o quite atributos del objeto. Sólo se pueden modificar. Object.isSealed(pj): ${Object.isSealed(pj)}`;

/*
const barbarian = {
    nombre: 'Saibot',
    vida:26,
    ataque:9,
    clase: 'Barbaro',
    poderMagico:1,
    avatar: "avatar.png",
};
const arma2 = {
    nombreArma: 'Hacha de Uldrogoth',
    cuerpoAcuerpo: 13,
};

const pj2 = Object.assign(barbarian,arma2); //añade todo a un solo objeto.
console.log(pj2);

const pj3 =  { ...barbarian, ...arma2};
console.log(pj3);*/