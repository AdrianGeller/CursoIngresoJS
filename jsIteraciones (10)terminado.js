function Mostrar()
{

	/* iteración hasta que el usuario quiera*/
	//alert("Función");

	var respuesta="si";
	var nota=0;
	var sumador=0;
	var contador=0;
	var promedioNota;
	var sumaNota=0;
	var edad;
	var nombre;
	var sexo;
	var masViejo;
	var edadMasViejo;
	var mujeresAprobadas=0;



	while(respuesta=="si")
	{

		contador++;
		//leo y valido nota
		nota=prompt("Por favor ingrese su nota");
		nota=parseInt(nota);
		while(nota<0 || nota>10)
		{
			nota=prompt("Por favor ingrese su nota");
			nota=parseInt(nota);
		}

		edad=prompt("Por favor, ingrese su edad");//transformar a entero y validar que tenga entre 0 y 100
		edad=parseInt(edad);
		nombre=prompt("Por favor, ingrese su nombre");
		sexo=prompt("Por favor, ingrese su sexo, f si es femenino y m si es masculino");//validar que sea f o m
		//acá termino la carga y valdiación de datos
		//Comenzamos a hacer las operaciones necesarias

		if(contador==0)
			{
				masViejo=nombre;
				edadMasViejo=edad;
			}
			else
				if(edad>edadMasViejo)
				{
					masViejo=nombre;
					edadMasViejo=edad;
				}
				/*
				1- Cantidad de mujeres aprobadas.
				2- Cantidad de hombres mayores a 25 aprobados.
				3- Cantidad de mujeres menores a 20 años.
				4- El nombre de la mujer con mejor nota.
				5- El nombre del hombre con mejor nota.
				6- Promedio de nota de los hombres.
				7- Promedio de nota de las mujeres.
				8- Porcentajes de aprobados vs desaprobados.
				9- El sexo y el nombre de la primer persona que se saque 10.*/

		if(sexo=="f" && (nota>=6 && nota <=10))
		{
			mujeresAprobadas++;
		}




		sumaNota=nota+sumaNota;
		respuesta=prompt("Ingrese si para contiunar.");
	}

	promedioNota=sumaNota/contador;
	console.log(promedioNota);
	document.write("La cantidad de mujeres aprobadas es: " + mujeresAprobadas + "<br>");

	/*var contador=0;
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
			else//si no es positivo o negativo el número, entonces por descarte es un cero.
			{
				ceros++;
			}
		

		if(numero%2 == 0)
		{
			par++;
		}


		pregunta=prompt("¿Desea seguir ingresando números?");
	
	}


	diferencia=positivo+negativo;//para restar un número que ya es negativo hay que poner +, poner - cambia el signo
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
*/



}//FIN DE LA FUNCIÓN