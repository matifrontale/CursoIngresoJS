/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  let numero;
  let acumPos = 0;
  let acumNeg = 1;
  let respuesta = "si";
  let contadorNeg = 0;

  do {
    numero = parseInt(prompt("Ingrese un numero"));   //pedi numero

    while (isNaN(numero)) {    //valido si es un numero
      numero = parseInt(prompt("Esto no es un numero, Ingrese un numero"));
    }
    if (numero >= 0) {
      acumPos += numero;    // acumPos = acumPos + numero
    } else {
      acumNeg *= numero;    // acumNeg = acumNeg * numero
      contadorNeg++;
    }

    respuesta = prompt("Quiere ingresar otro numero?: ");
  } while (respuesta == "si");

  if (contadorNeg == 0) {  // si no carga negativos queda acumNeg = 1 , entonces este if.
    acumNeg = 0;
  }

  document.getElementById("txtIdSuma").value = acumPos;
  document.getElementById("txtIdProducto").value = acumNeg;
} //FIN DE LA FUNCIÓN

//etrategia de la funcion
// 1- Declaracion de la variable
//( numero, acumulador de positivos, acumulador de negativos, respuesta del usuario)

// 2- generar bucle. Lo que se hace una vez  , y lo que se va a repetir
// 3- pedir numero
// 3.1- validar que el dato es un numero
// 4- analizar signo
// 5- Actualizar el acumulador + o - (sumarlos)
// 6- mostrar la informacion al usuario
