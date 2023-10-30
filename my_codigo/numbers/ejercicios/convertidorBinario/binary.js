let num = prompt('Ingresa un número');

oper = Number.parseInt(num);

console.log(typeof(num));

if(!Number.isInteger(oper)){
    document.querySelector('.result').innerHTML = `No ingresaste un número`;
}else{
    let result=[];
    while(oper!=0){
        if(oper%2==0){
            result.unshift(0);
            oper = oper/2;
        }else{
            result.unshift(1);
            oper = (oper-1)/2;
        }
    }
    console.log(result);
    let  number = "";
    for (let i = 0; i < result.length; i++) {
        number+=result[i];
        
    }
    
    document.querySelector('.result').innerHTML = `El valor de ${num} en binario es: ${number}`;

}
