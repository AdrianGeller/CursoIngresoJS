/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

var importe;
//var aumento; nel
var importeAumento;
var sinDecimal;


importe=document.getElementById('sueldo').value;

importe=parseInt(importe);
//importeAumento=parseInt(importeAumento);

//aumento=(importe*10)/100; nel

//importeAumento=importe+aumento; esta forma es muy larga, mejor la corta

importeAumento=importe*1.1;

sinDecimal=importeAumento.toFixed();

//alert("RESULTADO= $" + importeAumento); nel MAL, esto no es lo que pide el ejercicio

document.getElementById('resultado').value=sinDecimal;
	
}
