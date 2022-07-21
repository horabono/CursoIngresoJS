/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar()
{	
	var numeroUno = parseInt(txtIdNumeroUno.value); 
	var numeroDos = parseInt(txtIdNumeroDos.value);
	alert("La suma es " + (numeroUno + numeroDos));	
}

function restar()
{
	var numeroUno = parseInt(txtIdNumeroUno.value); 
	var numeroDos = parseInt(txtIdNumeroDos.value);
	alert("La resta es " + (numeroUno - numeroDos));	
}

function multiplicar()
{ 
	var numeroUno = parseInt(txtIdNumeroUno.value); 
	var numeroDos = parseInt(txtIdNumeroDos.value);
	alert("El producto es " + (numeroUno * numeroDos));	
}

function dividir()
{
	var numeroUno = parseInt(txtIdNumeroUno.value); 
	var numeroDos = parseInt(txtIdNumeroDos.value);
	alert("El cociente es " + (numeroUno / numeroDos));	
}

