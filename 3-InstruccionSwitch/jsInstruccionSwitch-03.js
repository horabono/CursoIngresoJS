function mostrar()
{
	//tomo el mes
	var mesDelAño = txtIdMes.value;
	if(mesDelAño == "Febrero") {
		alert("Este mes no tiene más de 29 días.");
	} else {
		alert("Este mes mes tiene 30 o más días.");
	}
}//FIN DE LA FUNCIÓN

/* 
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días"
*/