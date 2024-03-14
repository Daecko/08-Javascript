/* Ejercicio 1: Mayúsculas y Minúsculas
Texto inicial: "Hola Mundo"

Tarea: Convertir toda la cadena a mayúsculas, y luego a minúsculas. */
let texto = "Hola mundo"
console.log("Ejercicio 1: "+texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
/* Ejercicio 2: Contando Caracteres
Texto inicial: "JavaScript es asombroso"

Tarea: Contar cuántas letras 'a' contiene la cadena. */
texto = "Javascript es asombroso"
console.log("Ejercicio 2: "+texto)
let cont = 0
for(let i=0;i<texto.length;i++){
    if (texto[i]==="a"){
        cont++
    }
}
console.log("a:"+cont)
/* Ejercicio 3: Extracción de Subcadenas
Texto inicial: "Desarrollo con JavaScript"

Tarea: Extraer la palabra "JavaScript" de la cadena completa. */
texto = "Desarrollo con JavaScript"
console.log("Ejercicio 3: "+texto)
let palabra = "JavaScript"
console.log(`Palabra: ${texto.slice(texto.indexOf(palabra),texto.indexOf(palabra)+palabra.length)}`)
/* Ejercicio 4: Comparación de Cadenas
Texto inicial: "Hola", "hola"

Tarea: Determinar si las dos cadenas son iguales, ignorando mayúsculas y minúsculas. */
texto = "Hola hola"
console.log("Ejercicio 4: "+texto)
texto="Hola"
console.log(texto.toLowerCase()=="hola".toLowerCase() ? `${texto} y hola son iguales` : `${texto} y hola no son iguales`)
/* Ejercicio 5: Concatenación
Texto inicial: "Hola", "Mundo"

Tarea: Concatenar las dos cadenas para formar "Hola Mundo". */
texto = "\"Hola\" y \"Mundo\""
console.log("Ejercicio 5: "+texto)
console.log("Hola" + "Mundo")

/* Ejercicio 6: Eliminación de Espacios
Texto inicial: "    JavaScript    "

Tarea: Eliminar los espacios en blanco al principio y al final de la cadena. */
texto = "    JavaScript    "
console.log("Ejercicio 6: "+texto)
console.log(`trim:${texto.trim()}`)
/* Ejercicio 7: Reemplazo de Palabras
Texto inicial: "JavaScript es genial"

Tarea: Reemplazar "genial" por "asombroso". */
texto = "JavaScript es genial"
console.log("Ejercicio 7: "+texto)
console.log(`replace(): ${texto.replace("genial","asombroso")}`)
/* Ejercicio 8: Inversión de Cadena
Texto inicial: "Desarrollo"

Tarea: Invertir el orden de los caracteres de la cadena. */
texto = "Desarrollo"
console.log("Ejercicio 8: "+texto)
console.log(`reverse():${texto.split("").reverse().join("")}`)
/* Ejercicio 9: División en Array
Texto inicial: "manzana,banana, cereza"

Tarea: Dividir la cadena en un array utilizando la coma como separador. */
texto = "manzana,banana, cereza"
console.log("Ejercicio 9: "+texto)
console.log(texto.split(","))
/* Ejercicio 10: Encuentra la Posición
Texto inicial: "Aprendiendo JavaScript"

Tarea: Encontrar la posición inicial de la palabra "JavaScript". */
texto = "Aprendiendo JavaScript"
console.log("Ejercicio 10: "+texto)
console.log(`JavaScript en posición: ${texto.indexOf("JavaScript")}`)