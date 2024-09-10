
const productos = [
    {nombre: 'Anillo', precio: 5000},
    {nombre: 'Cadena', precio: 10000},
    {nombre: 'Pulsera', precio: 8000},
    {nombre: 'Dije de Corazón', precio: 6000},
    {nombre: 'Media falange', precio: 4000},
    {nombre: 'Tobillera', precio: 5000},
]

const carrito = []

const agregarCarrito = (productos, cantidad)=>{
    const elementoCarrito = {
        nombre: productos.nombre,
        precio: productos.precio,
        cantidad: cantidad
    }
    carrito.push(elementoCarrito)
}

const totalCarrito = ()=>{
    let total = 0
    console.log(carrito)
    for(let i=0; i<carrito.length; i++){
        total += carrito[i].precio * carrito[i].cantidad
    }
    return total
}

const app = ()=>{
    alert("Bienvenidos a Joyeria Mushu")
    let loop = true
    while(loop){
        let producto = prompt("Por favor elegir el Código del producto que desea comprar: \n 0- Anillo de Plata $ 5000 \n 1- Cadena $10000 \n 2- Pulsera $8000 \n 3- Dije de Corazón $6000 \n 4- Media Falange $4000 \n 5- Tobillera $5000 \n 6- Aros con Dije $5000")
        let cantidad = parseInt(prompt("Por favor, indicar la cantidad de ${producto} que quiere comprar"))
        agregarCarrito(productos[producto], cantidad)
        loop = confirm("¿Desea agregar mas productos a su compra?")
        }
    alert("El total a abonar es de  " + totalCarrito() +" Muchas gracias por elegirnos.")
}

app()


