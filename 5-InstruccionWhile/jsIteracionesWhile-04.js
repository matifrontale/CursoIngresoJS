/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numero = parseInt(prompt("Ingrese un numero entre 0 y 9 inclusive")); // lo pido con prompt

	while (numero < 0 || numero > 9 || isNaN(numero)){
	numero =parseInt(prompt("Ingrese un numero entre 0 y 9 inclusive")); //mientras cumpla el while lo valida sino sigue adentro del bucle.
	}

	document.getElementById("txtIdNumero").value = numero;  // lo muestro en la caja 
}//FIN DE LA FUNCIÓN