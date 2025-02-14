/*VENTAS VENDEDORES 
Se conoce el monto de ventas de varios vendedores. Se desea conocer la cantidad de ventas 
que fueron por 100$ o menos, cantidad de ventas mayores a 100$. Asimismo, se desea saber el 
monto total en $ de todas las ventas. 
Se dispone de los siguientes datos de varias vendedores: (nombre, monto venta) 
(Mary, 150), (José, 135), (Carlos, 160), (Pedro, 75) 
Cantidad de ventas que fueron por 100$ o menos: 1 
Cantidad de ventas mayores a 100$: 3 
Monto total de las ventas: 520$*/

import Cl_vendedor from "./Cl_vendedor.js";
import Cl_venta from "./Cl_venta.js";

let vendedor1 = new Cl_vendedor("Mary", 150);
let vendedor2 = new Cl_vendedor("Jose", 135);   
let vendedor3 = new Cl_vendedor("Carlos", 160);
let vendedor4 = new Cl_vendedor("Pedro", 75);

let venta=new Cl_venta();
venta.procesarvendedor(vendedor1);
venta.procesarvendedor(vendedor2);
venta.procesarvendedor(vendedor3);
venta.procesarvendedor(vendedor4);

let salida=document.getElementById("salida");
salida.innerHTML=`Resultados:
<br>Cantidad de ventas que fueron por 100$ o menos: ${venta.cantVm()}
<br>Cantidad de ventas mayores a 100$: ${venta.cantVM()}
<br>Monto total de las ventas: ${venta.montoT()}$`;