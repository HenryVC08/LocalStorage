localStorage.setItem('nombre','henry')

// sessionStorage.setItem('nombre','henry2')



//Forma de convertir objeto a STRING
const producto = {
    nombre: 'Monitor de 24 pulgadas',
    precio: 300
}

const productoString = JSON.stringify(producto)
// console.log(productoString)
localStorage.setItem('producto', productoString)

const  meses = ['Enero', 'Febrero', 'Marzo']
const mesesString = JSON.stringify(meses)
localStorage.setItem('meses',mesesString)