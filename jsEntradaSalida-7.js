/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	

var sumando1;
var sumando2;
var suma;

sumando1=document.getElementById('numeroUno').value;
sumando2=document.getElementById('numeroDos').value;

sumando1=parseInt(sumando1);
sumando2=parseInt(sumando2);

suma=sumando1 + sumando2;

alert("la suma es: " + suma);	
}

function restar()
{
var minuendo;
var sustraendo;
var diferencia;	

minuendo=document.getElementById('numeroUno').value;
sustraendo=document.getElementById('numeroDos').value;

minuendo=parseInt(minuendo);
sustraendo=parseInt(sustraendo);

diferencia=minuendo-sustraendo;

alert("la resta es: " + diferencia);
}

function multiplicar()
{ 
var factor1;
var factor2;
var producto;

factor1=document.getElementById('numeroUno').value;
factor2=document.getElementById('numeroDos').value;	

factor1=parseInt(factor1);
factor2=parseInt(factor2);

producto=factor1*factor2;

alert("el producto es: " + producto);
}

function dividir()
{
var dividiendo;
var divisor;
var cociente;

dividiendo=document.getElementById('numeroUno').value;
divisor=document.getElementById('numeroDos').value;

dividiendo=parseInt(dividiendo);
divisor=parseInt(divisor);

cociente=dividiendo/divisor;

alert("el cociente es: " + cociente);		
}

