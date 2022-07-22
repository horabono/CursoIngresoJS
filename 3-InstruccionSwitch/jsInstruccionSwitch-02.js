function mostrar()
{
	var mesDelAño = txtIdMes.value;
	switch(mesDelAño) {
		case "Septiembre": 
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya pasamos el frío, ahora calor!!!.");
			break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frío.");
			break;
		default:
			alert("Falta para el invierno.");
	}
}//FIN DE LA FUNCIÓN

/*
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.
*/