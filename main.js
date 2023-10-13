let usuarios = [
  { nombre: "juan", banco: "nacion", tarjeta: 123456 },
  { nombre: "pedro", banco: "santander", tarjeta: 654321 },
  { nombre: "camila", banco: "bbva", tarjeta: 789456 },
  { nombre: "matias", banco: "provincia", tarjeta: 456123 },
];
function validarCuotas() {
  let cuotas = parseInt(prompt("elija entre 1, 3 o 6 cuotas"));
  while (cuotas != 1 && cuotas != 3 && cuotas != 6) {
    cuotas = parseInt(prompt("cuota no disponible, ingrese de nuevo"));
  }
  return cuotas;
}
function validarUsuario(usuario) {
  alert(`sus datos son ${usuario.nombre}, ${usuario.tarjeta},${usuario.banco}`);
  let validacion = prompt("los datos son correctos??");
  if (validacion == "si") {
    return true;
  }

  return false;
}

function agregarUsuario() {
  let nuevoUsuario = prompt("ingrese su nombre");
  let nuevoBanco = prompt("ingrese su banco");
  let nuevaTarjeta = prompt(" ingrese su tarjeta");

  usuarios.push({
    nombre: nuevoUsuario,
    banco: nuevoBanco,
    tarjeta: nuevaTarjeta,
  });
  console.log(usuarios);
}
agregarUsuario();
function main() {
  let ingresante = prompt("ingrese su nombre").toLowerCase();
  let usuario = usuarios.find((usuario) => usuario.nombre == ingresante);
  if (usuario == undefined) {
    return alert("necesitas una cuenta bancaria para entrar");
  }

  let bancoSelecto;

  let banco = usuario.banco;
  if (banco == "santander" || banco == "bbva" || banco == "provincia") {
    bancoSelecto = true;
    alert("usted puede pagar en 3 o 6 cuotas con interes");
  } else if (banco == "nacion") {
    alert("usted goza de 3 o 6 cuotas sin interes");
  } else {
    alert("usted no goza de descuentos");
  }
  let valor;
  let precio = parseInt(
    prompt("ingrese valor(no hay cuotas para compras menores a 1000)")
  );
  if (precio < 1000) {
    alert("no podes pagar en cuotas");
  }
  if (precio >= 1000 && bancoSelecto) {
    let cuotas = validarCuotas();

    switch (cuotas) {
      case 1:
        valor = precio * 1.1;
        alert(`el precio final es de ${valor}`);

        break;
      case 3:
        valor = precio * 1.5;
        alert(`el precio final a pagar es de ${valor}`);
        alert(`el precio a pagar por cuota es de ${valor / cuotas}`);

        break;

      case 6:
        valor = precio * 2;
        alert(`el precio final a pagar es de ${valor}`);
        alert(`el precio a pagar por cuota es de ${valor / cuotas}`);
        break;
      default:
        alert("cuota no disponible,reinicie la pagina e intente de nuevo");
        break;
    }
    let esValido = validarUsuario(usuario);
    if (esValido == true) {
      alert("la compra fue realizada con exito");
    } else {
      alert("hubo un error,recargue la pagina y vuelva a intentarlo");
    }
  }
  if (precio >= 1000 && banco == "nacion") {
    for (let i = 1; i <= 6; i++) {
      if (i == 1 || i == 3 || i == 6) {
        alert(
          "el precio por cuota es de " +
            precio / i +
            ` en ${i} cuotas sin interes`
        );
      }
    }
    cuotas = validarCuotas();
    alert(`usted va a pagar ${precio} en ${cuotas} cuotas sin interes`);
  }
}

main();
