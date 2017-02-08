/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var gradosCentigrados;
var gradosFarenheit;

gradosFarenheit=document.getElementById('Temperatura').value;

gradosFarenheit=parseInt(gradosFarenheit);
gradosCentigrados=parseInt(gradosCentigrados);

gradosCentigrados=(gradosFarenheit-32)* (5/9);

alert(gradosFarenheit + " Farenheit son " + gradosCentigrados + " centigrados");	
}

function CentigradosFahrenheit () 
{
var gradosCentigrados;
var gradosFarenheit;


gradosCentigrados=document.getElementById('Temperatura')value;

gradosFarenheit=parseInt(gradosFarenheit);
gradosCentigrados=parseInt(gradosCentigrados);

gradosFarenheit=gradosCentigrados*(9/5)+32;	

alert(gradosCentigrados + " Centigrados son " + gradosFarenheit + "Farenheit");
}
