function Mostrar()
{
//tomo la edad  
	var edad;

	edad=document.getElementById('edad').value;

	if(edad>=18)
	{
		alert("Usted es mayor de edad");
	}
	//if(edad<=17) nel, usa mucho microprocesador :c, de todos modos es viable hacerlo así
	else
	{
		alert("Usted es menor de edad");
	}

}//FIN DE LA FUNCIÓN