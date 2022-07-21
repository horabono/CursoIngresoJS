function mostrar()
{
	var edad = txtIdEdad.value;
	var estado = estadoCivil.value;
	if(edad < 18 && estado != "Soltero") {
		alert("Es muy pequeño para no ser soltero");
	} 
}//FIN DE LA FUNCIÓN