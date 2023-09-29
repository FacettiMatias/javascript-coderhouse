function datos (nombre,tarjeta,celular,direccion){
alert(`confirme si los datos son correctos: ${nombre}, ${tarjeta} ,${celular}, ${direccion}`)
}
let bancoSelecto; 

let banco = prompt('elija su banco para saber si goza de descuento').toLocaleLowerCase();
if (banco == 'santander'|| banco == 'bbva' || banco == 'provincia') {
    bancoSelecto = true 
    alert ('usted puede pagar en 3 o 6 cuotas con interes')
} else if (banco == 'nacion') {
    alert( 'usted goza de 3 o 6 cuotas sin interes')
}else {
   alert ('usted no goza de descuentos')
}

let precio = parseInt (prompt ( 'ingrese valor(no hay cuotas para compras menores a 1000)'));
if (precio >= 1000 && bancoSelecto) {
    let cuotas =parseInt(prompt('elija entre 1, 3 o 6 cuotas'));
    let valor ;
    switch (cuotas) {
        case 1:
            valor = precio * 1.10;
            alert (`el precio final es de ${valor}`)
            
            break;
        case 3:
            valor = precio * 1.5;
            alert(`el precio final a pagar es de ${valor}`)
            alert ( `el precio a pagar por cuota es de ${valor/cuotas}`)

            break;

        case 6:
        valor = precio * 2;
        alert(`el precio final a pagar es de ${valor}`)
        alert ( `el precio a pagar por cuota es de ${valor/cuotas}`)

        default:
            break;
    }
}
 else if  ( precio >= 1000 && banco =='nacion'){
    let cuotas =parseInt(prompt('elija entre 1, 3 o 6 cuotas'));
    let valor ;
    switch (cuotas) {
        case 1:
            valor = precio;
            alert (`el precio final es de ${valor}`)
            
            break;
        case 3:
            valor = precio;
            alert ( `el precio a pagar por cuota es de ${valor/cuotas}`)
            break;
        case 6:
        valor = precio;
        alert ( `el precio a pagar por cuota es de ${valor/cuotas}`)

        default:
            break;
    }
}
alert('ingrese sus datos')
let nombre = prompt ('ingrese su nombre tal como aparece en la tarjeta');
let tarjeta = prompt ('ingrese su numero de tarjeta');
let codigo = prompt ('ingrese el codigo de seguridad de su tarjeta');
let  direccion= prompt ('ingrese su direccion');
datos(nombre,tarjeta,codigo,direccion);

respuestaDatos = prompt('sus datos son correctos??')

if (respuestaDatos == 'si') {
    alert( 'su compra se ha realizado correctamente')
} else{
    alert('recargue la pagina y vuelva a intentarlo')
}


