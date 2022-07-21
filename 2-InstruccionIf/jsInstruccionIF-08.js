function mostrar()
{
	var edad = txtIdEdad.value;
	var estado = estadoCivil.value;
	if(edad >= 18 && estado == "Soltero") {
		alert("Es soltero y no es menor");
	} 
}//FIN DE LA FUNCIÓN