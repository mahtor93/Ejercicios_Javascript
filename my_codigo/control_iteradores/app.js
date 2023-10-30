//switch-case en js:

const dinero = 100;
const totalAPagar = 500;
const tarjeta = false;
const cheque = false;

const metodoPago= 'tarjeta';
const tipoPago = 'credito';
const cantCuotas = 3;

switch(metodoPago){
    
    case 'efectivo': console.log(`Pagaste con ${metodoPago}`);
    break;

    case 'cheque': console.log(`Pagaste con ${metodoPago}`);
    break;

    //anidando switch dentro de un switch
    case 'tarjeta': console.log(`Estás pagando con ${metodoPago}, por favor elige un tipo de pago`);
    switch(tipoPago){
        
        case 'credito': console.log(`Estás pagando a crédito`);
        switch(cantCuotas){
            case 1: console.log(`estas pagando en ${cantCuotas} cuotas`);
            break;
            case 3: console.log(`estas pagando en ${cantCuotas} cuotas`);
            break;
            case 6: console.log(`estas pagando en ${cantCuotas} cuotas`);
            break;
            default: break;
        }
        break;

        case 'debito': console.log(`Estás pagando con debito`);
        break;

        default: break;
    }
    break;

    default: console.log(`no soportado`);
    break;
}
