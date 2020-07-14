/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroIngresadoUno;
	var numeroIngresadoDos;
    var totalSuma;
    numeroIngresadoUno=txtIdNumeroUno.value;
	numeroIngresadoDos=txtIdNumeroDos.value;

	numeroIngresadoUno=parseInt(numeroIngresadoUno);
	numeroIngresadoDos=parseInt(numeroIngresadoDos);
    
    totalSuma =numeroIngresadoUno+numeroIngresadoDos;

    alert("El resultado de la suma es: "+totalSuma);
}

