/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  // declaramos variables
  let numero;
  let maximo;
  let minimo;
  let seguir;
  let flag = 0;

  //creamos el bucle (mientras el usuario quiera --> do while)
  // dentro del bucle........
  do {
    numero = parseInt(prompt("Ingrese un numero: "));
    while (isNaN(numero)) {
      // pedimos el numero y lo validamos
      numero = parseInt(prompt("Error, Ingrese un numero: "));
    }
    if (flag == 0) {
      maximo = numero; // reconocer si estoy pidiendo por primera vez , de ser asi inicializo min y max
      minimo = numero;
      flag = 1; // al convertirlo en 1 ya se vuelve a ejecutar
    }
    if (numero > maximo) {
      // caso contrario me fijo si tengo un nuevo max y min
      maximo = numero;
    } else if (numero < minimo) {
      minimo = numero;
    }

    seguir = prompt("Quiere ingresar otro numero ? ");
  } while (seguir == "s");

  document.getElementById("txtIdMaximo").value = maximo;
  document.getElementById("txtIdMinimo").value = minimo;

  // los actualizo si es necesario.

  //fuera del bucle..........

  // mostrar la info
}
//pedimos el numero
//validamos el numero
