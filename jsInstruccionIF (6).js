function Mostrar()
{
//tomo la edad  

var edad;

	edad=document.getElementById('edad').value;

	/*if(edad>13 && edad<18)
	{
		alert("Usted es adolescente");
	}

	if(edad>=18)
	{
		alert("Usted es mayor de edad");
	}

	if(edad<13)
	{
		alert("Usted es menor de edad");
	}
	esta forma usa mucho micro :c , mejor la otra
*/
	if(edad>17)
		{
			alert("usted es mayor");
		}
		else
			if(edad<12)
			{
				alert("usted es menor");
			}
			else
			{
				alert("usted es adolescente");
			}
			
}//FIN DE LA FUNCIÓN