function Mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var pregunta;

	// declarar variables
	
	var respuesta='no';

	while(respuesta!=pregunta)
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		if(contador==0)
		{
			maximo=numero;
			minimo=numero;

		}
		else
			if(numero>maximo)
			{
				maximo=numero;
			}
			if(numero<minimo)
			{
				minimo=numero;

			}
		contador++;
		pregunta=prompt("¿Desea seguir ingresando números?");

	
	}

document.getElementById('minimo').value=minimo;
document.getElementById('maximo').value=maximo;




}//FIN DE LA FUNCIÓN