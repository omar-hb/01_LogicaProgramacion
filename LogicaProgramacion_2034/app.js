//Primer acercamiento a JavaScript
//alert('Hola mundo');
//Variables
//Se agrega para el desafío del curso
let numeroMinimo = 1;
let numeroMaximo = 1;
let numeroSecreto = 0;
//
//Original
//let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//Se utilizará un operador ternario para mostrar vez o veces según corresponda. Se debe evaluar siempre
//la viabilidad de utilizar un operador ternario, ya que no siempre es viable.
//let palabraVeces = "vez";
//Original
//let maximosIntentos = 3;
//Se agrega para el desafío del curso
let maximosIntentos = 0;
//

//Para poder visualizar el número secreto seudo aleatorio en las pruebas.
//console.log(numeroSecreto);
//Para visualizar en consola el tipo de dato de la variable.
// ES IMPORTANTE REVISAR LOS TIPOS DE DATOS DE LAS VARIABLES PARA EVITAR ERRORES.
//console.log(typeof(numeroSecreto));
//Original - reemplazado por línea 37
//console.log(numeroSecreto);

//Se agrega para el desafío del curso
numeroMinimo = parseInt(prompt("Me indicas el número entero positivo mínimo del rango por favor:"));
numeroMaximo = parseInt(prompt("Me indicas el número entero positivo máximo del rango por favor:"));
maximosIntentos = Math.trunc((numeroMaximo - numeroMinimo)/5); //Para establecer un máximo de intentos acorde al rango
  console.log(`Intentos: ${maximosIntentos}`);
alert(`Tienes ${maximosIntentos} intentos para adivinar el número secreto`);
numeroSecreto = Math.floor((Math.random() + (numeroMinimo / numeroMaximo))*numeroMaximo)+1;
  console.log(`Número secreto: ${numeroSecreto}`);
  console.log(`Número mínimo: ${numeroMinimo} , número máximo: ${numeroMaximo}`);
//  console.log(numeroUsuario);  
//

while (numeroUsuario != numeroSecreto) {
  //parseInt devuelve la parte entera (número) de un string
  //Original
  //numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));
  //Se agrega para el desafío del curso
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${numeroMinimo} y ${numeroMaximo} por favor:`));
    console.log(`Número usuario: ${numeroUsuario}`);
  //
  //console.log(numeroUsuario);

  /*
  Este código realiza
  la comparación
  */
  if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición.
    //alert('Acertaste el número.');
    //El formato ${algo} se llama TEMPLATE STRING
    //En el template string se utilizará un operador ternario para el caso de la palabra vez o veces.
    //alert(`Acertaste, el número es ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}.`);
    alert(`Acertaste, el número es ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
  } else {
      if(numeroMinimo <= numeroUsuario && numeroUsuario <= numeroMaximo) { //Se agrega para el desafío del curso. Para evitar comparar números fuera del rango establecido.
        //Esto es una condicional anidada - if dentro de else
        if(numeroUsuario > numeroSecreto) {
          alert("El número secreto es menor.");
        } else {
          alert("El número secreto es mayor.");
        }
        //Incrementamos el contador cuando no acierta.
        //Las dos últimas son opciones abreviadas.
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;
        //palabraVeces = "veces";
      } else { //Se agrega para el desafío del curso. Para evitar comparar números fuera del rango establecido.
          alert(`Ingresa solamente números dentro del rango ${numeroMinimo} a ${numeroMaximo}`);
      }
    //Se agrega un número máximo de intentos, avisando cuando se alcanza dicho número
    if(intentos > maximosIntentos) {
      alert(`Alcanzaste el número máximo de ${maximosIntentos} intentos`);
      break;
    }
    //La condición no se cumplió.
    //alert("Lo siento, no acertaste el número.");
  }
} 


/*
let edad = prompt("Ingrese su edad:");

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}
*/

/*
alert('Bienvenido al juego del número secreto');
let intento = prompt('Elige un número entre 1 y 10');

let numeroSecreto = 4;

console.log(intento  == numeroSecreto);
if (intento  == numeroSecreto) {
    alert('Acertaste');
} else {
    //alert('El número secreto era ' + numeroSecreto);
    alert('El número secreto era ' + numeroSecreto + ', pero elegiste ' + intento);
}
*/

/*
const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
*/

/*
alert('Bienvenido al juego del número secreto');

// Agrega un console.log para verificar el valor de "intento" después de la entrada del usuario
let intento = prompt('Elige un número entre 1 y 10');
console.log('Valor de intento:', intento);

let numeroSecreto = 4;

// Agrega un console.log para verificar la comparación entre "intento" y "numeroSecreto"
console.log('Resultado de la comparación:', intento == numeroSecreto);

if (intento == numeroSecreto) {
    alert('Adivinaste');
} else {
    // Agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert('El número secreto era ' + numeroSecreto);
}
Apuntes y propuesta para el desafío del curso - Omar Hernández 
*/
