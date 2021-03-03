/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let numero;
	let total = 0;
	let respuesta= "s";
	let promedio;
	let contador = 0;

	while (respuesta == "s" ) {
numero = parseInt(prompt("Ingrese su numero"));
total += numero; 		// le suma a TOTAL el numero que ponga el usuario 
contador++; 			 // cada vez que cumple un bucle suma +1 a contador para saber la cantidad de vueltas que da.
respuesta = prompt("Quiere ingresar otro numero?");
	}

	promedio = total / contador;

	document.getElementById("txtIdSuma").value = total;             // MUESTRO LA CANTIDAD DE NUMEROS ELEGIDOS EN VARIABLE TOTAL

	document.getElementById("txtIdPromedio").value = promedio;            // MUESTRO PROMEDIO
}//FIN DE LA FUNCIÓN