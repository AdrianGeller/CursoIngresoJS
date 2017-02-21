function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	
	var respuesta='no';
	var pregunta;

	while(pregunta!=respuesta)
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		if(numero>=0)
		{
			positivo=numero+positivo;

		}
		else
		{
			negativo=numero*negativo;
		}


		pregunta=prompt("¿Desea seguir agregando números?");
	}



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN