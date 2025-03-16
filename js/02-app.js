//OBTENIENDO LOS DATOS ALMACENADOS EN LOCAL STOAGE
const nombre = localStorage.getItem('nombre')
console.log(nombre)

const productoJSON = localStorage.getItem('producto')
console.log(productoJSON)



//CONVERTIR STRING A OBJETO
const productoJSON2 = localStorage.getItem('producto')
console.log(JSON.parse(productoJSON2))

const mesesJSON = localStorage.getItem('meses')
console.log(JSON.parse(mesesJSON))