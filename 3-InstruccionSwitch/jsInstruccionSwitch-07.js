function mostrar()
{
	var destinoIngresado = txtIdDestino.value;
	switch(destinoIngresado) {
		case "Bariloche":
			alert("Oeste");
			break;
		case "Cataratas":
			alert("Norte");
			break;
		case "Mar del plata":
			alert("Este");
			break;
		case "Ushuaia":
			alert("Sur");
	}

}//FIN DE LA FUNCIÓN

/*
Al selecionar un destino , indicar el punto cardinal de nuestro pais 
en donde se encuentra Norte, Sur, Este u Oeste

	<option value="Bariloche">Bariloche</option>
	<option value="Cataratas">Cataratas</option>
	<option value="Mar del plata">Mar del plata</option>
	<option value="Ushuaia">Ushuaia</option>

*/