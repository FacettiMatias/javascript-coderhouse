let productos = [
];

productos = JSON.parse(localStorage.getItem('productos'))
if(productos== null){
   productos = []
}
function guardarStorage (){
localStorage.setItem('productos',JSON.stringify(productos))}

function agregarProducto() {
  let nuevoProducto = document.getElementById("producto");
	let nuevaMarca = document.getElementById("marca");
	let nuevoPrecio = document.getElementById("precio");

  if(nuevoProducto.value === '' || nuevaMarca.value === '' || nuevoPrecio.value === ''){
  return alert('un campo esta vacio')
}
	productos.push({
    id: productos.length,
		producto: nuevoProducto.value,
		marca: nuevaMarca.value,
		precio: nuevoPrecio.value
	});
  nuevoProducto.value = '';
  nuevaMarca.value = '';
  nuevoPrecio.value = '';
  guardarStorage();
  alert('el producto fue cargado con exito')
}

let formularioAgregar = document.getElementById("formularioAgregar");
formularioAgregar.addEventListener("submit", (e) => {
	agregarProducto();
	e.preventDefault();
});

document.getElementById('agregar').addEventListener('click', function() {
  let menu = document.getElementById('menuAgregar');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});
document.getElementById('botonBuscar').addEventListener('click', function() {
  let menu = document.getElementById('menuBuscar');
  if (menu.style.display === 'none' || menu.style.display === '') {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
});


let productoBuscado = document.getElementById('buscarProducto')
let buscar = document.getElementById('buscar')

function buscarProducto(){
let nombre = productoBuscado.value;
let productoSelecto = productos.find(item => item.producto === nombre);
if(productoSelecto === undefined){
 return alert('el producto no fue encontrado')
}
let anuncio = document.createElement('div')
  anuncio.innerHTML = `producto:${productoSelecto.producto} <br> ${productoSelecto.precio} <br> ${productoSelecto.marca}`
  document.body.append(anuncio)
  let borrar = document.createElement('button')
}
let formularioBuscar = document.getElementById("formularioBuscar");
formularioBuscar.addEventListener("submit", (e) => {
  e.preventDefault();
  buscarProducto();
  productoBuscado.value = '';
})

productos.forEach(item => {
  let div = document.getElementById('catalogo')
  let div2 = document.createElement('div');
  div2.innerHTML= `<h2>nombre:${item.producto}</h2>
  <p>marca:${item.marca}</p>
  <b>precio:${item.precio}</b>`
  div.append(div2)
  // console.log(item);
});
