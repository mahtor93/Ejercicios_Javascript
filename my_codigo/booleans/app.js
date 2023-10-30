const bool1 = true;
const bool2 = false;
const bool3 = "true";

document.querySelector('.bool1').innerHTML = `${bool1}`;
document.querySelector('.bool2').innerHTML = `${bool2}`;
document.querySelector('.comp1').innerHTML = `${bool1} == "${bool3}" es  ${bool1 == bool3} porque ${typeof(bool1)} != ${typeof(bool3)}`;

const bool4 = new Boolean(true);

document.querySelector('.otrobool').innerHTML = `const bool4 = new Boolean(true) es de tipo ${typeof(bool4)}, porque no es un primitivo, es un objeto`;

console.log(bool1 === true); //true
console.log(bool1 === "true"); //false
console.log(bool3 === "true"); //true
console.log(bool3 === true); //false