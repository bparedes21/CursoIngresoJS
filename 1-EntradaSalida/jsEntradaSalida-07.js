/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var PrimerNumeroIngresado;
	var SegundoNmeroIngresado;
	var resultadoDelaSuma;

	PrimerNumeroIngresado=txtIdNumeroUno.value;
    SegundoNmeroIngresado=txtIdNumeroDos.value;

    PrimerNumeroIngresado=parseInt(PrimerNumeroIngresado);
    SegundoNmeroIngresado=parseInt(SegundoNmeroIngresado);
    
    resultadoDelaSuma=PrimerNumeroIngresado+SegundoNmeroIngresado;

    alert("La suma de los dos numeros ingresados es: "+resultadoDelaSuma);

}


function restar()
{
    var PrimerNumeroIngresado;
	var SegundoNmeroIngresado;
	var resultadoDeLaResta;
	PrimerNumeroIngresado=txtIdNumeroUno.value;
    SegundoNmeroIngresado=txtIdNumeroDos.value;

    PrimerNumeroIngresado=parseInt(PrimerNumeroIngresado);
    SegundoNmeroIngresado=parseInt(SegundoNmeroIngresado);

    resultadoDeLaResta=PrimerNumeroIngresado-SegundoNmeroIngresado;

    alert("La resta de los dos numeros ingresados es: "+resultadoDeLaResta);
}


function multiplicar()
{ 
    var PrimerNumeroIngresado;
	var SegundoNmeroIngresado;
    var resultadoDeLaMultiplicacion;

	PrimerNumeroIngresado=txtIdNumeroUno.value;
    SegundoNmeroIngresado=txtIdNumeroDos.value;

    PrimerNumeroIngresado=parseInt(PrimerNumeroIngresado);
    SegundoNmeroIngresado=parseInt(SegundoNmeroIngresado);
     
   resultadoDeLaMultiplicacion=PrimerNumeroIngresado*SegundoNmeroIngresado;

    alert("El resultado de la multiplicacion es: "+resultadoDeLaMultiplicacion);
}


function dividir()
{
    var PrimerNumeroIngresado;
	var SegundoNmeroIngresado;
	var ResultadoDeLaDivision;


	PrimerNumeroIngresado=txtIdNumeroUno.value;
    SegundoNmeroIngresado=txtIdNumeroDos.value;

    PrimerNumeroIngresado=parseInt(PrimerNumeroIngresado);
    SegundoNmeroIngresado=parseInt(SegundoNmeroIngresado);

    ResultadoDeLaDivision=PrimerNumeroIngresado/SegundoNmeroIngresado;

    alert("El resultado de la division es: "+ResultadoDeLaDivision);
}

