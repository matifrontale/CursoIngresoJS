/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
  //pido el sexo
  //valido el dato con while

  let sexo = prompt("Ingrese sexo f / m ").toLowerCase(); //validar

  //while (sexo != "f" && sexo != "m") {                                            OPCION 1 "CUANDO SEA DIFERENTE DE F Y M"
  //sexo = prompt("Error sexo invalido. Reingrese f / m: ");

  while (!(sexo == "f" || sexo == "m")) {
    //OPCION 2 ! NIEGA/INVIERTE EL VALOR DE VERDAD ADENTRO DEL ()
    sexo = prompt("Error sexo invalido. Reingrese f / m: ".toLowerCase());
  } //

  document.getElementById("txtIdSexo").value = sexo;
} //FIN DE LA FUNCIÓN
