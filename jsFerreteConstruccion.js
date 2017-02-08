/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var ancho;
var largo;
var totalAlambre;

ancho=document.getElementById('Ancho').value;
largo=document.getElementById('Largo').value;

ancho=parseInt(ancho);
largo=parseInt(largo);

totalAlambre=(ancho*2+largo*2)*3;

alert("El alambre que hay que comprar es:" + totalAlambre + "m");
}
function Circulo () 
{
var radio;
var area;

radio=document.getElementById('Radio').value;

radio=parseInt(radio);

area=math.pi*(radio*radio);

alert("el area del círculo es:" + area);

}
function Materiales () 
{
	
}