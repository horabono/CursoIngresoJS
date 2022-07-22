function mostrar()
{
	var mesDelAño = txtIdMes.value;
	switch(mesDelAño) {
		case "Abril":
		case "Junio":
		case "Septiembre": 
		case "Noviembre":
			alert("Tiene 30 días");
			break;
		case "Febrero":
			alert("Tiene 28 días");
			break;
		default:
			alert("Tiene 31 días");
	}
}//FIN DE LA FUNCIÓN

/*
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.
*/