/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
var primerNum;
var segundoNum;
var resultado;

primerNum=document.getElementById('numeroUno').value;
segundoNum=document.getElementById('numeroDos').value;

primerNum=parseInt(primerNum);
segundoNum=parseInt(segundoNum);

resultado=primerNum + segundoNum;

alert("La suma es " + resultado);
}

