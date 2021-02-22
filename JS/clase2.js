var nombre = 'JesK', apellido = 'Rodríguez'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()
var primeraLetra = nombre.charAt(1)
var cantidadDeLetras = nombre.length
// var nombreCompleto = nombre + ' ' +apellido
//Interpolación de Variables
// var nombreCompleto = `${nombre} ${apellido}`
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`
var str = nombre.charAt(0) + apellido.charAt(0)
var str2 = nombre.substr(1, 2)