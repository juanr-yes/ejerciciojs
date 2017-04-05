/**
 * Ejercicio:
 * -Crear un repositorio
 * -Al usuario se le va a pedir que ingrese 2 numeros.
 * -Se le debe mostrar al usuario en una alerta los 4 posibles resultados de las operaciones matematicas con estos dos numeros
 * -Suben el codigo a github
 * -Comparten link en Slack
 */

var numeroUno = prompt("Hola usuario. Ingresa un numero")
var numeroDos = prompt("Ingresa otro numero")
var sumaNumeros = Number(numeroUno)+Number(numeroDos)
var restaNumeros = Number(numeroUno)-Number(numeroDos)
var multiNumeros = Number(numeroUno)*Number(numeroDos)
var diviNumeros = Number(numeroUno)/Number(numeroDos)
alert("Bien. Si se suman estos numeros el resultado es: " + sumaNumeros + ". Si se restan, el resultado es: " + restaNumeros + ". Si se multiplican, el resultado es: " + multiNumeros + ". Y si se dividen, el resultado es: " + diviNumeros + ". Gracias por colaborar.")