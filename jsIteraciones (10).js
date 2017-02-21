function Mostrar()
{

	var contador=0;
	var positivo=0;
	var promedioPositivos;
	var negativo=0;
	var promedioNegativos;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var diferencia;
	var par=0;
	var ceros=0;
	var pregunta;
	var numero;
	//declarar contadores y variables 
	
	var respuesta="no";

	while(pregunta!=respuesta)
	{
		numero=prompt("Ingrese un número");
		numero=parseInt(numero);
		if(numero>0)
		{
			contadorPositivos++;
			positivo=numero+positivo;

		}

		else
			if(numero<0)
			{
				contadorNegativos++;
				negativo=numero+negativo;
				
			}
			else
			{
				ceros++;
			}
		

		if(numero%2 == 0)
		{
			par++;
		}


		pregunta=prompt("¿Desea seguir ingresando números?");
	
	}


	diferencia=positivo+negativo;
	promedioNegativos=negativo/contadorNegativos;
	promedioPositivos=positivo/contadorPositivos;

	document.write("La suma de los positivos es: "+positivo+ "<br>" );
	document.write("La suma de los negativos es: "+negativo + "<br>" );
	document.write("La cantidad de números positivos es: "+contadorPositivos+ "<br>" );
	document.write("La cantidad de números negativos es: "+contadorNegativos+ "<br>" );
	document.write("La cantidad de ceros es: "+ceros+ "<br>" );
	document.write("La cantidad de números pares es: "+par+ "<br>" );
	document.write("El promedio de los números positivos es: "+promedioPositivos+ "<br>" );
	document.write("El promedio de los números negativos es: "+promedioNegativos+ "<br>" );
	document.write("La diferencia entre los números positivos y negativos es: "+diferencia );

}//FIN DE LA FUNCIÓN