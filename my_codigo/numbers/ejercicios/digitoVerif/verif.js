let rut = prompt('Ingresa un rut:');
let alert = "";
let splitted;

if(rut.length<9){
    alert += "El rut es demasiado corto.\n";
}
if(rut.length>10){
    alert += "El rut es demasiado largo.\n";
}
if(!rut.includes("-")){
    alert += "Falta dígito verificador.\n";
}else{
    splitted = rut.split("-"); //si hay dígito verificador, separamos el valor ingresado
    if(!Number.isInteger(Number.parseInt(splitted[0]))){
        alert += "La primera parte del rut no es un número.\n";
    }
    if(splitted[1]!=='k'){
    if(!Number.isInteger(Number.parseInt(splitted[1]))){
        alert += "La segunda parte del rut no es un número o K.\n";
    }
}
}

if(alert.length!=0){
    document.querySelector('.result').innerHTML = `${alert}`;
}else{
    let verif = splitted[1]; //digito verificador a comprobar.
    let eval = splitted[0]; //rut para calcular el digito verificador.
    let arr =[];
    let suma =0;
    let serie =[2,3,4,5,6,7,2,3];
    for(let i = 0;i<eval.length;i++){
        arr.push(Number.parseInt(eval[i]));
        
    }
    arr.reverse();

    for(let i =0; i<eval.length;i++){
        arr[i] = (Number.parseInt(arr[i]*serie[i]));
        suma += arr[i];
    }

    let suma2 = Math.floor(suma/11);
    suma2 = suma2*11;
    suma = Math.abs(suma -suma2);
    suma = 11 - suma;
    if(suma==11){
        suma =0;
    }   
    if(suma==10){
        suma = K;
    }
    if(suma==verif){
        document.querySelector('.result').innerHTML = `El rut ${rut}, es válido`;
    }else{
        document.querySelector('.result').innerHTML = `El rut ${rut}, no es válido, el digito verificador debería ser ${suma}`;
    }
}








