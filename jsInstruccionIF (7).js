function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	var soltero;
	var casado;
	var divorsiado;

	edad=document.getElementById('edad').value;
	estadoCivil=document.getElementById('estadoCivil').value;

	if(edad>=18)
	{

	}
	else
	{
		if(estadoCivil!=soltero)
		{
			alert("Es muy pequeño para NO ser soltero");
		}
	}


}//FIN DE LA FUNCIÓN