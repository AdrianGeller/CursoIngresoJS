function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
/*
var nota;

nota=Math.floor(Math.random() * 10)+1;

//alert(nota); 

if(nota<=4)
{
	alert("Vamos, la proxima se puede");
}	
else
	if(nota>4 && nota<9)
	{
		alert("Aprobó");
	}
	else
	{
		alert("Excelente");
	}

así estaba bien programado pero mal tabulado y de difícil comprensión, más fácil la otra forma

*/
var nota;

nota=Math.floor(Math.random() * 10)+1;

if(nota<=4)
{
	alert("Vamos, la próxima se puede");
}
else
{
	if(nota>8)
	{
		alert("Excelente");
	}
	else
	{
		alert("Aprobó");	
	}
	
}
}//FIN DE LA FUNCIÓN