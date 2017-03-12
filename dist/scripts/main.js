// expresion es cuando metes una funciona anonima en una variable
// es buena practica mantener mi codigo siemrpe dentro de mi scope
// (function() {
// });

// Escapar las comillas simples
// alert('i can\'t stop loving you');

// Trabajando con strings (Metodos) y Propiedades
/*
var string = 'hola Mundo de nuevo'
var propLongitud = string.length; //propiedad
var metIndexOf = string.indexOf('e'); //metodo
var metReplace = string.replace('Mundo', 'max'); //metodo reemplazar strings
console.log(propLongitud, metIndexOf, metReplace);
*/

// Arrays son tipos de datos compuestos (varios valores)
// SIntaxis entre corchetes poner valores pueden sr de dif, tipos.
// [1,2,3,'hola','mundo',false]
// Lo recomendable es uardarlo para luego acceder a el por subindices. los array tabien tienen propiedades y metodos
var array = [12, 44, 'Hola', 'mundo'];
// AL imprimir el arrelo en Proto dice sus metodos

array[4] = 3; //Arega valor al string
// Podemos convertir un array a un strin separado por comillas (Metodo JOIN)
var arrayToString = array.join(' ');
// y viceversa
// string = 'Mi Nombre es Maximiliano';
// var stringToArray = string.split(' '); //el parametro indida el elemento ue buscara para separar cada item
// console.log(stringToArray);
// se pueden concatenar
var array1 = ['Mi', 'Nombre', 'es'];
var array2 = ['Maximiliano'];
var stringConcate = array1.concat(array2);
console.log(stringConcate);
// Añadir y quitar elementos (al inicio y al final) con los metodos unshift(),push(),shift(),pop()
// Añadir al pricipio
// stringConcate.unshift('hola');
// Añadir al final
// stringConcate.push('como estas?');
// Eliminar al pricipio
// stringConcate.shift();
// // Eliminar al final
// stringConcate.pop();
// console.log(stringConcate);

// CONDCIONALES
// NOta:Una vez que encuentre una condicion verdadera se salta las demas
// if (false) {
//     console.log('se cumplio condicion 1')
// } else if (true) {

//     console.log('se cumplio condicion 2')
// } else if (true) {
//     console.log('se cumplio condicion 3')
// } else {
//     console.log('no se cumplio ninguna condicion');
// }

// LOOPS
// For
// 	For ini
// 	For Each (para funciones)
// While
// Dowhile

// For in sirve para arrays y objetos

//FUNCIONES (Codigo JavaScript rehutilizable)

// Estructura de una funcion
// function suma(a, b) { //parametros
//     var suma = a + b;
//     return (suma); //valor que retorna hacia afuera
// }

// console.log(suma(3, 5, 344, 233)); //invocacion
// NOTA: si no se pasan los parametros necesarios para la funcion no marca error usara los arumentos que necesita e inorara los demas, y yi hay menos arumentos de los necesarios solo el valor sera indefinido

// Para Arrelar este problema se puede usar el objeto arumentos
// function sumarNarguments() {
//     var suma = 0,
//         arg = arguments.length,
//         i = 0;
//     for (i; i < arg; i++) {
//         suma += arguments[i];
//     }

// return suma; //retorna el valor no la variable, que lueo puede ser almacenado en una variable
//Ademas return termina la funcion
// }
// var miSuma = sumarNarguments(299, 3, 3, 3, 3);
// console.log(miSuma);

// Funciones AutoEjecutables
// almacenadas es una variable
// Funcion Autoejecutable, investiar pr que se encieran en parentesis
(function() {
    var saludo = console.log('Holita MUndo');
    return saludo;
})(); //Se pone operador de ejecucion de Funciones
// funcion guardada en variable
var miFuncion = (function(a, b) {
    suma = a + b;
    return suma;
})(333, 333);
// Funcion por expresion
// Se guarda en una va variable y se ejecuta con el nombre de la variable y el operador de ejecucion
var otraFuncion = function() {
    console.log('Hola soy una fucnion por declaracion');
};
otraFuncion();

// window.addEventListener('click', function() {
//     alert('HOlaaa');
// });


var miAlerta = function() {
    alert('HOla2');
}
window.addEventListener('click', miAlerta);
