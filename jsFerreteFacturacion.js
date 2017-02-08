/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{

var producto1;
var producto2;
var producto3;
var precioTOTAL;

producto1=document.getElementById('PrecioUno').value;
producto2=document.getElementById('PrecioDos').value;
producto3=document.getElementById('PrecioTres').value;

producto1=parseInt(producto1);
producto2=parseInt(producto2);
producto3=parseInt(producto3);

precioTOTAL=producto1 + producto2 + producto3;

alert("El precio total de los 3 productos es: $" + precioTOTAL);
}
function Promedio () 
{

var producto1;
var producto2;
var producto3;
var promedio;

producto1=document.getElementById('PrecioUno').value;
producto2=document.getElementById('PrecioDos').value;
producto3=document.getElementById('PrecioTres').value;

producto1=parseInt(producto1);
producto2=parseInt(producto2);
producto3=parseInt(producto3);

promedio=(producto1 + producto2 + producto3)/3;


alert("El promedio de los 3 productos es: $" + promedio);

}
function PrecioFinal () 
{

var producto1;
var producto2;
var producto3;
var precioSinIVA;
var iva;
var precioConIVA;

producto1=document.getElementById('PrecioUno').value;
producto2=document.getElementById('PrecioDos').value;
producto3=document.getElementById('PrecioTres').value;

producto1=parseInt(producto1);
producto2=parseInt(producto2);
producto3=parseInt(producto3);
precioSinIVA=parseInt(precioSinIVA);
iva=parseInt(iva);
precioConIVA=parseInt(precioConIVA);

precioSinIVA=producto1 + producto2 + producto3;
iva=(precioSinIVA*21)/100;
precioConIVA=precioSinIVA+iva;

alert("El precio final es: $" + precioConIVA);

	
}