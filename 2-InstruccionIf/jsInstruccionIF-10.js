function mostrar()
{
	var nota = Math.floor(Math.random() * 10) + 1;
	if(nota < 4) {
		alert(nota + " Vamos, la proxima se puede");
	} else if(nota < 9) {
		alert(nota + " APROBÓ");
	} else {
		alert(nota + " EXCELENTE");
	}
}//FIN DE LA FUNCIÓN