function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='no';
	var numero;
	var pregunta;


	while(pregunta!=respuesta)//mientras que pregunta sea diferente a respuesta, se cumple la condición
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
//numero es el numero variable que ingresa el usuario para sumar al total, el total es el acumulador
		acumulador=acumulador+numero;
//el contador se suma por 1 para poder sacar el promedio luego
		contador++;
		pregunta=prompt("¿Quiere seguir ingresando números?");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN