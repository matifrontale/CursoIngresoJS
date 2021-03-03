/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.  
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
  let numero;
  let seguir;
  let contadorPositivos = 0;
  let contadorNegativos = 0;
  let contadorPares = 0;
  let contadorCeros = 0;
  let acumuladorPositivos = 0;
  let acumuladorNegativos = 0;
  let diferencia;
  let promedioNegativos= 0;
  let promedioPositivos= 0;

  do {
    numero = parseInt(prompt("Ingrese un numero "));
    while (isNaN(numero)) {
      numero = parseInt(prompt("ERROR, Ingrese un numero "));
    }
    if (numero > 0) {
      contadorPositivos++;
      acumuladorPositivos += numero;
    } else if (numero < 0) {
      contadorNegativos++;
      acumuladorNegativos += numero;
    } else {
      contadorCeros++;
    }

    if (numero % 2 == 0) {
      contadorPares++;
    }

    seguir = prompt("Quiere ingresar otro numero ?");
  } while (seguir == "si");

  if (contadorPositivos > 0) {
    promedioPositivos = acumuladorPositivos / contadorPositivos;
  }
  if (contadorNegativos > 0) {
    promedioNegativos = acumuladorNegativos / contadorNegativos;
  }

  diferencia = contadorPositivos - contadorNegativos;

  console.log("Suma de los negativos: " + acumuladorNegativos);
  console.log("Suma de los positivos: " + acumuladorPositivos);
  console.log("cantidad de los positivos: " + contadorPositivos);
  console.log("cantidad de negativos: " + contadorNegativos);
  console.log("Cantidad de ceros: " + contadorCeros);
  console.log("Cantidad de numeros pares: " + contadorPares);
  console.log("promedio de positivos: " + promedioPositivos);
  console.log("promedio de negativos: " + promedioNegativos);
  console.log("diferencia entre positivos y negativos: " + diferencia);
} //FIN DE LA FUNCIÓN
